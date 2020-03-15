import React, { useState, useEffect, useContext } from 'react';
import AutoComplete from '../../components/HomePage/AutoComplete';
import { Button } from 'react-bootstrap';
import './HomePage.css';
import CountUp from 'react-countup';
import ResultContext from '../../contexts/ResultContext';

const HomePage = props => {
  // const [country, setCountry] = useState();
  const [prohibitions, setProhibitions] = useState(0);
  const [restrictions, setRestrictions] = useState(0);

  async function getRestrictionsCount() {
    const response = await fetch('/main');
    const body = await response.json();
    setProhibitions(body.prohibitions);
    setRestrictions(body.restrictions);
  }

  useEffect(() => {
    getRestrictionsCount();
  }, []);

  const { changeTarget } = useContext(ResultContext);
  const getResult = (route, country) => {
    if (country === '') {
      alert('국가 또는 지역을 입력해주세요');
      return;
    }
    let target = country;
    if (target.includes(',')) {
      target = target.split(', ')[1];
    }
    changeTarget(target);
    props.history.push(`/${route}`);
  };

  return (
    <section className="homepage">
      <h2>✈️ 입국 가능 국가 조회하기</h2>
      <div className="count__parent">
        <div className="prohibitions">
          <h3>입국 금지 국가</h3>
          <h3>
            <CountUp end={prohibitions} />
          </h3>
        </div>
        <div className="restrictions">
          <h3>입국 제한 국가</h3>
          <h3>
            <CountUp end={restrictions} />
          </h3>
        </div>
      </div>
      <div className="homepage__contents">
        <h3>입국을 원하는 지역, 국가를 입력해주세요</h3>
        <AutoComplete />
        <div className="homepage__btn-group">
          <Button
            variant="dark"
            onClick={() => {
              const input = document.querySelector('input');
              const country = input.value;
              getResult('result', country);
            }}
          >
            확인하기
          </Button>
          <Button
            variant="light"
            onClick={() => {
              const input = document.querySelector('input');
              const country = input.value;
              getResult('map', country);
            }}
          >
            지도로 확인하기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
