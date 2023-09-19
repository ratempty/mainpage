import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";

function Weather() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [pty, setPty] = useState([]);
  const [sky, setSky] = useState([]);
  const [tem, setTem] = useState([]);
  const [restate, setRestate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const nowDay = moment(currentDate).format("YYYY 년 MM 월 DD 일");
  const nowTime = moment(currentDate).format("A hh : mm : ss");

  const apikey =
    "mjRsbDyMQDLwTp80DfddxsvMhCQycDNS1AIwNPt4TW42uu1iyQ7JbyGgFqgo42TjQf7PIUs2xUcrv85ATAr5Wg%3D%3D";

  const weatherLoad = () => {
    const setTime = new Date();
    setTime.setMinutes(setTime.getMinutes() - 30);
    return setTime;
  };
  const today = moment(weatherLoad()).format("YYYYMMDD");
  const baseTime = moment(weatherLoad()).format("HHmm");

  const apiurl = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${apikey}&dataType=JSON&numOfRows=1000&pageNo=1&base_date=${today}&base_time=${baseTime}&nx=60&ny=127`;

  useEffect(() => {
    axios
      .get(apiurl)
      .then((response) => {
        const data = response.data.response.body.items.item;
        const ptyData = data.filter((item) => item.category === "PTY");
        if (ptyData.length > 0) {
          setPty(ptyData[0].fcstValue);
        }
        const skyData = data.filter((item) => item.category === "SKY");
        if (skyData.length > 0) {
          setSky(skyData[0].fcstValue);
        }
        const temData = data.filter((item) => item.category === "T1H");
        if (temData.length > 0) {
          setTem(temData[0].fcstValue);
        }
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [restate]);
  const handleReload = () => {
    setRestate(!restate);
    setReload(true);
    setTimeout(() => {
      setReload(false);
    }, 400);
  };
  return (
    <div className="arti_wrap">
      <div className="weath">
        {loading ? (
          <>
            <span>
              {pty == 0 ? (
                sky <= 1 ? (
                  <img
                    src="/img/sun.png"
                    alt=""
                    style={{ animation: "rotate 5s linear infinite" }}
                  />
                ) : (
                  <img
                    src="/img/cloud.png"
                    alt=""
                    style={{ animation: "scale 1s linear alternate infinite" }}
                  />
                )
              ) : (
                <img
                  src="/img/umbrella.png"
                  alt=""
                  style={{ animation: "scale 1s linear alternate infinite" }}
                />
              )}
            </span>
            <p>
              Seoul <span className="nowTem">{tem}°C</span>
              <button
                onClick={handleReload}
                style={{ animation: reload && "reload .4s" }}
              />
            </p>
          </>
        ) : (
          <p style={{ width: "150px" }}>날씨 정보 로딩중</p>
        )}
      </div>
      <p className="date">
        <strong>{nowDay}</strong>
        <span>{nowTime}</span>
      </p>
    </div>
  );
}

export default Weather;
