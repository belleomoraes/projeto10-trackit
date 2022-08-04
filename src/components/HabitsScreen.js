import Head from "./Head";
import SubHead from "./SubHeadStyle";
import FormHabit from "./FormHabit";
import Menu from "./Menu";
import NoHabit from "./NoHabit";

export default function Habits() {
  
  return (
    <>
      <Head />
      <SubHead>
        <div>Meus Hábitos</div>
        <button>+</button>
      </SubHead>
      <FormHabit />
      <NoHabit />
      <Menu />
      
    </>
  );
}

