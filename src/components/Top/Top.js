import Bar from "../../components/Bar/Bar";
import { Input } from "../../components/Forms/StyleForms";
import search from "../../assets/images/search.png";
import { Top, UserBox } from "./StyleTop";
import { Link } from "react-router-dom";

export default function Toop({ to }) {  
  const nameShoop = "MyShoop";
  const name = "dudu";

  return(
    <>
      <Top>
        <Link to={to}>
          <Bar>
            {nameShoop}
          </Bar>
        </Link>  
        <span>
          <Input />
          <img src={search}/>
        </span>
        <Link to={"/user"} >
          <UserBox>
            {name}
            <img src="https://lh3.googleusercontent.com/ogw/AAEL6sg1I7IEWU2qlQHfNZcz0SiJ4oSa6lZcrCBCta7EpQ=s32-c-mo"/>
          </UserBox>
        </Link>
      </Top>
    </>
  );
};

