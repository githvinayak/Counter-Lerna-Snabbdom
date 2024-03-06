import { init } from 'snabbdom';
import { h, propsModule, eventListenersModule, styleModule } from 'snabbdom';
import bg1 from '../assets/site-bg.jpg';

//Initialize patch function with modules.
const patch = init([propsModule, eventListenersModule, styleModule]);

//Creating state object for managing states in the document.
let state = {
  count: 0
};

//init as null to render createTemplate function with initial state.
let vnode = null;

//Creating main div that is to be mounted and rendered.
function createTemplate(state) {
  return h('div',{
    style: {
      backgroundColor: "",
      backgroundImage: `url(${bg1})`,
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center"
    }
  },
   [h('div',{
      style: {
        background: 'rgba( 255, 255, 255, 0.05 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 4px )',
        webkitBackdropFilter: 'blur( 4px )',
        borderRadius: '9999px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        width: "480px",
        height: "480px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }
   },[
    h('h1',{
      style:{
        fontSize: "48px",
        color: "white"
    }
  }, state.count),
    h('button',{
      style: {
        background: 'linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #3bace2 100%, #406aff 117.04%)',
        boxShadow: '0px 4.42184px 107.23px rgba(255, 86, 246, 0.51)',
        height: '30px',
        width: '100px',
        color: 'white',
        border: 'none',
        borderRadius: "9999px",
        marginBottom: '4px',
      }
    , on: { mouseenter: handleMouseEnter,
            mouseleave: handleMouseLeave,
            click: increment } 
    }, "Increment"),
    h('button', {
      style: {
        background: 'linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #3bace2 100%, #406aff 117.04%)',
        boxShadow: '0px 4.42184px 107.23px rgba(255, 86, 246, 0.51)',
        height: '30px',
        width: '100px',
        color: 'white',
        border: 'none',
        borderRadius: "9999px",
        marginBottom: '4px',
      },
      on: {mouseenter: handleMouseEnter,
        mouseleave: handleMouseLeave, 
        click: decrement }
      }, "Decrement")
  ])]);
}
 //Hover effects on buttons.
function handleMouseLeave(event) {
  event.target.style.background = 'linear-gradient(92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #3bace2 100%, #406aff 117.04%)';
}

function handleMouseEnter(event) {
  event.target.style.background = 'linear-gradient(92.23deg, #406aff 21.43%,#3bace2 50.63%,#b936ee 100%, #ff56f6 117.04%)';
}

//updating of our state object and calling the render function.
function updateState(newState) {
  state = { ...state, ...newState };
  render();
}

//Increasing the count value.
function increment() {
  updateState({ count: state.count + 1 });
  console.log("State Changed");
}

//Decreasing the count value.
function decrement() {
  updateState({ count: state.count - 1 });
  console.log("State Changed")
}

//function to render components based on conditonals.
function render() {
  const newVNode = createTemplate(state);
  if (vnode === null) {
    vnode = newVNode;
    patch(document.getElementById('root'), vnode);
  } else {
    patch(vnode, newVNode);
    vnode = newVNode;
  }
}

//exporting mount function to 
export const mount = () => {
  console.log('Component mounted');
  render();
}

export const useEffect= (effect) => {
   effect();
 }