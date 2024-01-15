import Alert from "./components/ui/Alert/Alert";
import {Ban,CheckCheck,Info,AlertTriangle,Bell  } from 'lucide-react';
const App=()=>{
  return (
    <div>
    <Alert type="alert-danger" icon={<Ban size={20} style={{marginTop:10}}/>} title="Somthing went wrong" ><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit recusandae a odio molestias explicabo iste dolorum ullam quod illo <a href="/">Click Here</a> soluta ipsam inventore incidunt consequuntur deleniti, sit fugit, error excepturi. Animi.</p></Alert>
    <Alert type="alert-success" icon={<CheckCheck size={20} style={{marginTop:10}}/>} title="Your order has been processed" descrption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit recusandae a odio molestias explicabo iste dolorum ullam quod illo soluta ipsam inventore incidunt consequuntur deleniti, sit fugit, error excepturi. Animi."/>
    <Alert type="alert-warning" icon={<AlertTriangle  size={20} style={{marginTop:10}}/>} title="Tips & Tricks" descrption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit recusandae a odio molestias explicabo iste dolorum ullam quod illo soluta ipsam inventore incidunt consequuntur deleniti, sit fugit, error excepturi. Animi."/>
    <Alert type="alert-default" icon={<Bell size={20} style={{marginTop:10}}/>} title="Upgrade your plan" descrption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit recusandae a odio molestias explicabo iste dolorum ullam quod illo soluta ipsam inventore incidunt consequuntur deleniti, sit fugit, error excepturi. Animi."/>
    <Alert type="alert-info" icon={<Info size={20} style={{marginTop:10}}/>} title="Note" descrption="				Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit recusandae a odio molestias explicabo iste dolorum ullam quod illo soluta ipsam inventore incidunt consequuntur deleniti, sit fugit, error excepturi. Animi."/>

    </div>
  )
}
export default App;