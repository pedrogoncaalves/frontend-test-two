import * as S from "./styles"


export default function Header (){
    return(
        <S.Navbar>
          <S.Category>General</S.Category>
          <S.Category>Science</S.Category>
          <S.Category href="/business">Business</S.Category>
          <S.Category>Entertainment</S.Category>
          <S.Category>Health</S.Category>
          <S.Category>Sports</S.Category>
          <S.Category>Technology</S.Category>
            
        </S.Navbar>

    )
}