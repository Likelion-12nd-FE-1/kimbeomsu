import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    width: 100%;
    align-items: center;
  }
`;

const RegisterBox1 = styled.div`
  border: solid 1px #dfdfdf;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const RegisterBox2 = styled.div`
  border: solid 1px #dfdfdf;
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 80px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const GrayBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 395px;
  height: 50px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const GrayBox = styled.input`
  border: none;
  border-top:solid 1px #dfdfdf;
  flex: 1;
  height: 50px;
  color: #a4afc7;
  font-size: 16px;
  padding-left: 10px;
  &:focus {
    outline: none;
    border-bottom-color: #4da765;
  }
`;

const RightText = styled.div`
  padding-right: 10px;
  color: #a4afc7;
  font-size: 16px;
  
`;

const GenderButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10px;
`;

const GenderButton = styled.button`
  flex: 1;
  height: 50px;
  border: 2px solid #dfdfdf;
  background-color: white;
  color: #a4afc7;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-color: ${(props) => (props.selected ? "#4da765" : "#dfdfdf")};
  color: ${(props) => (props.selected ? "#4da765" : "#a4afc7")};
  &:not(:last-child) {
    margin-right: 0px;
  }

  &:focus {
    outline: none;
  }
`;

const SelectBoxWrapper = styled.div`
  width: 100%;
`;

const SelectBox = styled.select`
  border: none;
  border-bottom: solid 2px #dfdfdf;
  width: 100%;
  height: 50px;
  color: #a4afc7;
  font-size: 16px;
  padding-left: 10px;
  background-color: white;
  cursor: pointer;
  &:focus {
    outline: none;
    border-bottom-color: #4da765;
  }
`;

const RegisterButton = styled.button`
  background-color: #4da765;
  color: white;
  font-size: 15px;
  width: 400px;
  height: 45px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:active {
    background-color: #3e8e41;
    transform: scale(0.98);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const countries = [
  "대한민국",
  "미국",
  "영국",
  "캐나다",
  "일본",
  "중국",
  "독일",
  "프랑스",
  "이탈리아",
  "스페인",
  "브라질",
  "인도",
  "러시아",
  "호주",
  "기타",
];

const Register = ({ children }) => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleCountrySelect = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <Container>
      <Wrapper>
        <RegisterBox1>
          <GrayBoxWrapper>
            <GrayBox defaultValue="아이디" />
            <RightText>@naver.com</RightText>
          </GrayBoxWrapper>
          <GrayBoxWrapper>
            <GrayBox defaultValue="비밀번호" type="password" />
          </GrayBoxWrapper>
          <GrayBoxWrapper>
            <GrayBox defaultValue="이메일" />
          </GrayBoxWrapper>
        </RegisterBox1>
      </Wrapper>
      <RegisterBox2>
        <GrayBoxWrapper>
          <GrayBox defaultValue="이름" />
        </GrayBoxWrapper>
        <GrayBoxWrapper>
          <GrayBox defaultValue="생년월일8자리" />
        </GrayBoxWrapper>
        <GenderButtonWrapper>
          <GenderButton
            selected={selectedGender === "남자"}
            onClick={() => handleGenderSelect("남자")}
          >
            남자
          </GenderButton>
          <GenderButton
            selected={selectedGender === "여자"}
            onClick={() => handleGenderSelect("여자")}
          >
            여자
          </GenderButton>
          <GenderButton
            selected={selectedGender === "선택안함"}
            onClick={() => handleGenderSelect("선택안함")}
          >
            선택안함
          </GenderButton>
        </GenderButtonWrapper>
        <SelectBoxWrapper>
          <SelectBox value={selectedCountry} onChange={handleCountrySelect}>
            <option value="">국적을 선택하세요</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </SelectBox>
        </SelectBoxWrapper>
        <GrayBoxWrapper>
          <GrayBox defaultValue="전화번호" />
        </GrayBoxWrapper>
      </RegisterBox2>
      <RegisterButton>인증요청</RegisterButton>
    </Container>
  );
};

export default Register;
