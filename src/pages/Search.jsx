import { useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import searchIcon from "../assets/search.svg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: #F5F5F5;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 24px;
  background: #FFF;
`

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`

const SearchBar = styled.div`
  display: flex;
  flex: 1;
  height: 41px;
  padding: 2px 16px;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #D9D9D9;
  background: #FFF;
  gap: 8px;
`

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  font-family: 'Paperlogy';
`

const Section = styled.div`
  background: #FFF;
  padding: 16px 24px;
  margin-bottom: 8px;
`

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

const SectionTitle = styled.p`
  display: flex;
  font-family: 'Paperlogy';
  font-size: 16px;
  font-weight: 600;
  color: #272727;
`

const DeleteAll = styled.button`
  background: none;
  border: none;
  font-size: 12px;
  color: #B1B2B3;
  cursor: pointer;
  font-family: 'Paperlogy';
  font-weight: 600;
`

const EmptyText = styled.p`
  font-size: 13px;
  color: #B1B2B3;
  text-align: center;
  padding: 30px 0;
  font-weight: 600;
`

const ChipWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 12px;
  padding: 15px 0;
`

const Chip = styled.button`
  padding: 8px 20px;
  border-radius: 20px;
  background: #53B175;
  color: white;
  border: none;
  font-size: 13px;
  font-family: 'Paperlogy';
  cursor: pointer;
`

const Search = () => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState("")
  const [recentSearch, setRecentSearch] = useState([])

  const keywords = ["#일반쓰레기", "#음식물쓰레기", "#플라스틱", "#캔/금속", "#종이", "#유리"]

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>{"<"}</BackButton>
        <SearchBar>
          <SearchInput
            placeholder="검색어를 입력하세요"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <img src={searchIcon} width={18} height={18} />
        </SearchBar>
      </Header>

      <Section>
        <SectionHeader>
          <SectionTitle>최근 검색어</SectionTitle>
          <DeleteAll>전체 삭제</DeleteAll>
        </SectionHeader>
        {recentSearch.length === 0 && (
          <EmptyText>최근 검색어가 없습니다.</EmptyText>
        )}
      </Section>

      <Section>
        <SectionTitle>추천 검색어</SectionTitle>
        <ChipWrapper>
          {keywords.map((keyword) => (
            <Chip key={keyword}>{keyword}</Chip>
          ))}
        </ChipWrapper>
      </Section>
    </Container>
  )
}

export default Search