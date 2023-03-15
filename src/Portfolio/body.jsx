import "./body.css";
function Education(props) {
    return (
        <div className="educationalBackground">
        <h2>Eductional Background</h2>
        <p>Institute: {props.institute}</p>
        <p>Department: {props.department}</p>
        <p>CGPA: {props.cgpa}</p>
      </div>
    )
}

function Skill() {
    return(
        <div className="educationalBackground">
        <h2>Language Skills</h2>
        <p>C, C++, PHP, Python, Javascript</p>
      </div>
    
    )
}
function Technical(){
  return(
    <div className="educationalBackground">
    <h2> Skills &amp; Technologies</h2>
    <p>Javascript</p>
    <p>React</p>
    <p>SQL</p>
   </div>
  )
}

function Projects() {
    return(
    <div className="educationalBackground">
    <h2>Projects</h2>
    <p>Product Management APP</p>
    <p>Counter</p>
    <p>Calculator</p>
   </div>
    )
}

function Intro(props) {
    return (
        <div className="intro">
        <h1>Hi I'm {props.name}</h1>
        <p>React & Frontend Developer,Tech Enthusiast.</p>
      </div>
    )
}
function Body() {
  return (
    <div className="body">
      <Intro name="Sabrina"/>
      <div className="wrapEducationBackground">
        <Education institute="RUET" department="Electrical & Computer Engineering" cgpa="3.36"/>
        <Skill/>
        <Projects/>
        <Technical />
      
      </div>
    </div>
  );
}

export default Body;