import React from 'react';
import AutoComplete from '../../components/HomePage/AutoComplete';
import { Button } from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
  return (
    <section className="homepage">
      <h2>입국 가능 국가 조회하기</h2>
      <div className="homepage__contents">
        <h3>입국을 원하는 지역, 국가를 입력해주세요</h3>
        <AutoComplete />
        <div className="homepage__btn-group">
          <Button variant="dark">확인하기</Button>
          <Button variant="light">지도로 확인하기</Button>
        </div>
      </div>
    </section>
  )
}

export default HomePage;