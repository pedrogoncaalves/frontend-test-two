import * as S from "./styles"


export default function Header (){
    return(
        <S.Navbar>
          <S.Category href="general">General</S.Category>
          <S.Category href="science">Science</S.Category>
          <S.Category href="/business">Business</S.Category>
          <S.Category href="/entertainment">Entertainment</S.Category>
          <S.Category href="health">Health</S.Category>
          <S.Category href="sports">Sports</S.Category>
          <S.Category href="technology">Technology</S.Category>
            
        </S.Navbar>

    )
}