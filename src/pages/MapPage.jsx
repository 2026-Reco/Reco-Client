import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import BottomNavComponent from "../components/BottomNav"
import SearchIcon from "../assets/img/search.svg"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: #fff;
`

const MapBox = styled.div`
  width: 100%;
  height: 100vh;
  background: #eee;
`

const SearchBox = styled.div`
  position: absolute;
  top: 58px;
  left: 62px;
  right: 62px;
  height: 52px;
  background: #fff;
  border-radius: 14px;
  display: flex;
  align-items: center;
  padding: 0 18px;
  gap: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  z-index: 10;
`

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-family: 'Paperlogy';
  font-size: 14px;
  color: #272727;

  &::placeholder {
    color: #b8b8b8;
  }
`

const SearchImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

const BottomSheet = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 88px;
  background: #fff;
  border-radius: 24px 24px 0 0;
  padding: 28px 24px 16px;
  z-index: 10;
  max-height: 400px;
  overflow-y: auto;
`

const SheetTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Paperlogy';
  font-size: 18px;
  font-weight: 700;
  color: #272727;
  margin-bottom: 22px;
`

const GreenText = styled.span`
  color: #53b175;
`

const ToggleButton = styled.button`
  border: none;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
`

const PlaceCard = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px;
  border: 1px solid #eeeeee;
  border-radius: 14px;
  margin-bottom: 14px;
  background: #fff;
  cursor: pointer;
`

const Thumbnail = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 10px;
  background: #d9d9d9;
  flex-shrink: 0;
`

const PlaceInfo = styled.div`
  flex: 1;
`

const PlaceName = styled.p`
  font-family: 'Paperlogy';
  font-size: 14px;
  font-weight: 700;
  color: #272727;
  margin-bottom: 6px;
`

const PlaceDesc = styled.p`
  font-family: 'Paperlogy';
  font-size: 11px;
  color: #959595;
  line-height: 1.4;
`

const Distance = styled.span`
  color: #53b175;
  font-weight: 700;
`

const LocationIcon = styled.span`
  color: #53b175;
  font-size: 20px;
`

const FloatingCard = styled.div`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 112px;
  z-index: 10;
  background: #fff;
  border-radius: 14px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 14px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  cursor: pointer;
`

const places = [
  {
    id: 1,
    name: "난향초등학교 스마트 수거함",
    lat: 37.4612,
    lng: 126.9185,
    distance: "0.3km",
  },
  {
    id: 2,
    name: "난향초등학교 스마트수거함",
    lat: 37.4598,
    lng: 126.9197,
    distance: "0.3km",
  },
  {
    id: 3,
    name: "난향초등학교 스마트수거함",
    lat: 37.4589,
    lng: 126.9174,
    distance: "0.5km",
  },
]

const MapPage = () => {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const markerListRef = useRef([])

  const [keyword, setKeyword] = useState("")
  const [isOpen, setIsOpen] = useState(true)
  const [selectedPlace, setSelectedPlace] = useState(places[0])

  useEffect(() => {
    const kakaoMapKey = import.meta.env.VITE_KAKAO_MAP_KEY

    const loadMap = () => {
      window.kakao.maps.load(() => {
        const center = new window.kakao.maps.LatLng(37.4604, 126.9188)

        const map = new window.kakao.maps.Map(mapRef.current, {
          center,
          level: 4,
        })

        mapInstanceRef.current = map

        places.forEach((place) => {
          const markerPosition = new window.kakao.maps.LatLng(
            place.lat,
            place.lng
          )

          const marker = new window.kakao.maps.Marker({
            map,
            position: markerPosition,
          })

          markerListRef.current.push(marker)

          window.kakao.maps.event.addListener(marker, "click", () => {
            setSelectedPlace(place)
            setIsOpen(false)
            map.panTo(markerPosition)
          })
        })
      })
    }

    const existingScript = document.querySelector(
      'script[src*="dapi.kakao.com/v2/maps/sdk.js"]'
    )

    if (existingScript) {
      existingScript.remove()
    }

    const script = document.createElement("script")
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoMapKey}&autoload=false&libraries=services`
    script.async = true
    script.onload = loadMap
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  const moveToPlace = (place) => {
    setSelectedPlace(place)
    setIsOpen(false)

    if (!mapInstanceRef.current || !window.kakao) return

    const movePosition = new window.kakao.maps.LatLng(place.lat, place.lng)
    mapInstanceRef.current.panTo(movePosition)
  }

  const handleSearch = () => {
    if (!keyword.trim()) return

    const ps = new window.kakao.maps.services.Places()

    ps.keywordSearch(keyword, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const firstPlace = data[0]

        const movePosition = new window.kakao.maps.LatLng(
          firstPlace.y,
          firstPlace.x
        )

        mapInstanceRef.current.panTo(movePosition)

        const searchMarker = new window.kakao.maps.Marker({
          map: mapInstanceRef.current,
          position: movePosition,
        })

        markerListRef.current.push(searchMarker)

        setSelectedPlace({
          id: firstPlace.id,
          name: firstPlace.place_name,
          lat: Number(firstPlace.y),
          lng: Number(firstPlace.x),
          distance: "검색 위치",
        })

        setIsOpen(false)
      } else {
        alert("검색 결과가 없습니다.")
      }
    })
  }

  return (
    <Container>
      <MapBox ref={mapRef} />

      <SearchBox>
        <SearchInput
          value={keyword}
          placeholder="위치를 입력하세요"
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch()
          }}
        />
        <SearchImg src={SearchIcon} alt="검색" onClick={handleSearch} />
      </SearchBox>

      {isOpen ? (
        <BottomSheet>
          <SheetTitle>
            <div>
              가장 가까운 분리배출 장소 <GreenText>TOP3</GreenText>
            </div>
            <ToggleButton type="button" onClick={() => setIsOpen(false)}>
              ⌄
            </ToggleButton>
          </SheetTitle>

          {places.map((place) => (
            <PlaceCard key={place.id} onClick={() => moveToPlace(place)}>
              <Thumbnail />
              <PlaceInfo>
                <PlaceName>{place.name}</PlaceName>
                <PlaceDesc>
                  지금 내가 있는 곳에서{" "}
                  <Distance>{place.distance}</Distance> 떨어진 곳에 있어요
                </PlaceDesc>
              </PlaceInfo>
              <LocationIcon>♙</LocationIcon>
            </PlaceCard>
          ))}
        </BottomSheet>
      ) : (
        <FloatingCard onClick={() => setIsOpen(true)}>
          <Thumbnail />
          <PlaceInfo>
            <PlaceName>{selectedPlace.name}</PlaceName>
            <PlaceDesc>
              지금 내가 있는 곳에서{" "}
              <Distance>{selectedPlace.distance}</Distance> 떨어진 곳에 있어요
            </PlaceDesc>
          </PlaceInfo>
        </FloatingCard>
      )}

      <BottomNavComponent />
    </Container>
  )
}

export default MapPage