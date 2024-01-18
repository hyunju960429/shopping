import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();

  const gotoLogin = () => {
    navigate("/login");
  };

  const gotoMain = () => {
    navigate("/");
  };

  const search = (event) => {
    if (event.key == "Enter") {
      //console.log("엔터");
      let keyword = event.target.value;
      console.log(keyword);
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <>
      <div className="login-button" onClick={gotoLogin}>
        <FontAwesomeIcon icon={faUser} />
        {
          //authenticate?A:B; //authenticate가 true이면 A가 실행되고 false이면 B가 실행
          authenticate ? (
            <div onClick={() => setAuthenticate(false)}>
              <span>로그아웃</span>
            </div>
          ) : (
            <div onClick={() => navigate("/login")}>
              <span>로그인</span>
            </div>
          )
        }
      </div>
      <div className="nav-section">
        <img
          onClick={gotoMain}
          src="https://image.ajunews.com//content/image/2020/12/16/20201216084514250095.png"
          alt="logo"
        />
      </div>
      <div className="menu_list">
        <ul>
          {menuList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="input">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" onKeyDown={(event) => search(event)} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
