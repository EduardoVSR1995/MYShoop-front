import Bar from "../../components/Bar/Bar";
import { Input } from "../../components/Forms/StyleForms";
import search from "../../assets/images/search.png";
import { Top, UserBox } from "./StyleTop";
import { Link } from "react-router-dom";

import { shopName } from "../../services/api";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";

export default function Toop({ to }) { 
  const { userData } = useContext(UserContext);
  return(
    <>
      <Top>
        <Link to={ to ? shopName+"/"+to : shopName }>
          <Bar>
            {shopName?.replace(/\//g, "")}
          </Bar>
        </Link>  
        <span>
          <Input />
          <img src={search}/>
        </span>
        <Link to={userData.name ? shopName+"/user" : shopName+"/sign-in" } >
          <UserBox >
            {userData.name ? userData.name : "Login" }
            <img src={userData.urlImage ? userData.urlImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNEelTlk7s95SyQHFW1aktkzWR6-M8MwOOg&usqp=CAU"}/>
          </UserBox>
        </Link>
      </Top>
    </>
  );
};

