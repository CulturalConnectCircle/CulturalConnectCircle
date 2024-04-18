import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/NavBar/NavigationBar";
import AboutCard from "../components/Card/AboutCard";
import JaneDoe from "../../assets/janeDoe.jpeg";
import JohnDoe from "../../assets/download.jpeg";
import JohnScott from "../../assets/johnScott.jpeg";
import JaneMary from "../../assets/janeMarry.jpg";
import JaneJackson from "../../assets/janeJackson.jpeg";
import JohnJameson from "../../assets/johnJameson.jpeg"

export default () => {

    const personInfo = [
        {
          id: 1,
          name: 'Vedantini',
          description: 'CEO',
          image: JaneDoe,
        },
        {
          id: 2,
          name: 'Ankit',
          description: 'Recruiter Head',
          image: JohnDoe,
        },
        {
            id: 3,
            name: 'Mohan',
            description: 'HR Manager',
            image: JohnScott,
          },
          {
            id: 4,
            name: 'Krima',
            description: 'Software Engineer',
            image: JaneMary,
          },
          {
            id: 5,
            name: 'Vidit',
            description: 'Data Analyst',
            image: JohnJameson,
          },
          {
            id: 6,
            name: 'Arpita',
            description: 'Product Owner',
            image: JaneJackson,
          },
      ];

    return (
        <>
            <NavigationBar name="ABOUT US"/>
            <AboutCard personInfo={personInfo}/>
            <Footer/>
        </>
    );
}