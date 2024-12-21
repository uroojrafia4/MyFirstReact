import Image from "next/image";
import styles from "./page.module.css";
import Button from "../app/Button"
import Header from "./header"
import Tasks from "../app/Tasks"
export default function Home() {

  return (
    <div className={styles.page}>
    <Header/>
     <Tasks text = 'The first list item'/>
     <Tasks text = 'The second list item'/>
     <Tasks text = 'The third list item' />
     <Tasks text = 'The fourth list item'/>
     <Button name = 'first Button' color='black'/>
     <Button name= 'second button' color = 'blue' />
    </div>
  );
}
