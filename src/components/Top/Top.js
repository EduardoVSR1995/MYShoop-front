import Bar from "../../components/Bar/Bar";
import { Input } from "../../components/Forms/StyleForms";
import search from "../../assets/images/search.png";
import { Top, UserBox } from "./StyleTop";

export default function Toop() {  
  const nameShoop = "MyShoop";
  const name = "dudu";

  return(
    <>
      <Top>
        <Bar>
          {nameShoop}
        </Bar>
        <span>
          <Input />
          <img src={search}/>
        </span>
        <UserBox>
          {name}
          <img onAuxClick={() => {} } src="https://lh3.googleusercontent.com/ogw/AAEL6sg1I7IEWU2qlQHfNZcz0SiJ4oSa6lZcrCBCta7EpQ=s32-c-mo"/>
        </UserBox>
      </Top>
    </>
  );
};

