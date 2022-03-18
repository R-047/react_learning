import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import JsxDemo from './components/JsxDemo';
import PropsDemo from './components/PropsDemo';
import Topic from './components/Topic';
import PropsClassCompDemo from './components/PropsClassCompDemo';
import StateDemoComp from './components/StateDemoCompClass';
import EventHandlingDemo from './components/EventHandlingDemo';
import EventHandlingDemoClass from './components/EventHandlingDemoClass';
import EventHandlerBindingClassDemo from './components/EventHandlerBindingClassDemo';
import MethodAsProps from './components/MethodAsProps';
import ConditionalRendering from './components/ConditionalRendering';
import ListComp from './components/ListComp';
import StyleComp from './components/StylesDemo/StyleComp';
import FormComp from './components/Forms'
import TestComp from './components/TestComp';

function App() {
  //function for methodAsPropsdemo 
  const childFunction = (val1, val2) => {
    console.log("this function is passed to child", val1, val2)
  }


  return (
    <div className="App">
      <Topic topicName="Functional Component"/>
      <FunctionalComponent />
      <Topic topicName="Class Component"/>
      <ClassComponent />
      <Topic topicName="JSX Demo"/>
      <JsxDemo />
      <Topic topicName="Props Demo"/>
      {/* props are immutable, props value cannot be changed inside the comp function */}
      <PropsDemo name="alby"/>
      <PropsDemo name="benet"/>
      <PropsDemo name="props example with a child component passed to PropsDemoComp">
        {/* if you wanna pass some element as props */}
        <p>this is a p tag inside PropsDemo</p>
      </PropsDemo>
      <Topic topicName="Props Using Class Comp Demo"/>
      <PropsClassCompDemo name="'Class Alby'"/>
      <Topic topicName="State using Class Comp"/>
      <StateDemoComp />
      <Topic topicName="event handling using function"/>
      <EventHandlingDemo />
      <Topic topicName="event handling using class"/>
      <EventHandlingDemoClass />
      <Topic topicName="event handling using class with binding"/>
      <EventHandlerBindingClassDemo />
      <Topic topicName="passing method as props"/>
      <MethodAsProps passedFunction={childFunction}/>
      <Topic topicName="Conditional Rendering"/>
      <ConditionalRendering />
      <Topic topicName="List rendering demo"/>
      <ListComp />
      <Topic topicName="Styles Demo"/>
      <StyleComp />
      <Topic topicName="Forms Demo"/>
      <FormComp />
      <TestComp />
    </div>
  );
}

export default App;
