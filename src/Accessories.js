//accessories

import React, { Component } from 'react' 
import Table from './Table'
import apicache from 'apicache'

let cache = apicache.middleware

export class AVAILABILITY extends React.Component {
  render() {
      return <div>{this.props.children}</div>
  }
}
export class INSTOCKVALUE extends React.Component {
  render() {
      return <div>{this.props.children}</div>
  }
}



export class Accessories extends Component {  
  constructor(props) {
    super(props);
    
    this.state = {
        filtered:[],
        accessories: [],
        value:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sethandleChange= this.sethandleChange.bind(this);
}

handleChange(e) {
  e.preventDefault();

  this.setState({
      value: e.target.value.toUpperCase()
  });
 
 this.sethandleChange(this.state.value)
}
sethandleChange(searchedVal){

  var a=this.state.accessories.filter((obj) => 
    obj.name.includes(searchedVal)
   
  );
 
  this.setState({filtered:a})
}
handleSubmit(e) {
  e.preventDefault();
 
}

     
  componentDidMount() {


   
 const getAccessoriesData = async () => {
 var  manuArray =[]
 var jkNew = []
 var avaiArray = [{},{},{},{},{}]
 var objArray = {}
    const request = await fetch('https://bad-api-assignment.reaktor.com/products/accessories', {
      headers: {
        'x-force-error-mode':'all'
        },
  });
  
    const jk = await request.json();

  jk.forEach(element => {
    if(!manuArray.includes(element.manufacturer)){
      manuArray.push(element.manufacturer)
      }

  
});
//Array(5) [ "derp", "abiplos", "nouke", "reps", "xoon" ]
for(var m in manuArray) //manuArray is the array of names of the manufactures  reps abiplos nouke derp xoon
{ 
 
  var nam = m.toString()
  nam = new Array()

}
for(var i= 0; i < manuArray.length; i++)
{  
  var nam =manuArray[i].toString()
  
  const request2 = await fetch('https://bad-api-assignment.reaktor.com/availability/'+manuArray[i]);
  const availman = await request2.json()
  var name = manuArray[i]
 name = new Array()
 
objArray = availman.response

  avaiArray.push(objArray) //avaiArray is the available manufactures arrays 

}

var re = ""

//go threw jk data and check the manufacture then search in the corresponding array and get the data by the right id
jk.forEach(element => {
 var  mun = element.manufacturer
if(mun === 'derp' && avaiArray[0].length>0){ 

  var __FOUND=  avaiArray[0].find(function(product,index)

  { 
     product.DATAPAYLOAD= product.DATAPAYLOAD.replace(/(\r\n|\n|\r)/gm,"");

 
  
    re = product.DATAPAYLOAD
  re = re.replace("<AVAILABILITY>  <INSTOCKVALUE>","")
  re = re.replace("</INSTOCKVALUE></AVAILABILITY>","")

  
  if(product.id.toLowerCase() ===element.id)
    {//element.id,element.manufacturer,element.name,element.type,element.color,element.price,product.DATAPAYLOAD
      //<AVAILABILITY><INSTOCKVALUE>iii </INSTOCKVALUE></AVAILABILITY>
      var obj={}
      obj.id=element.id
      obj.name=element.name
      obj.manufacturer=element.manufacturer
      obj.type=element.type
      obj.color= element.color
      obj.price= element.price
    obj.avaibility = re
     jkNew.push(obj) 
    }
    
    

  });
 
}else
if(mun === 'abiplos'&& avaiArray[1].length>0){ 

  var __FOUND=  avaiArray[1].find(function(product,index)

  { 
     product.DATAPAYLOAD= product.DATAPAYLOAD.replace(/(\r\n|\n|\r)/gm,"");

 
 
    re = product.DATAPAYLOAD
  re = re.replace("<AVAILABILITY>  <INSTOCKVALUE>","")
  re = re.replace("</INSTOCKVALUE></AVAILABILITY>","")

  
  
  if(product.id.toLowerCase() ===element.id)
    {//element.id,element.manufacturer,element.name,element.type,element.color,element.price,product.DATAPAYLOAD
      //<AVAILABILITY><INSTOCKVALUE>iii </INSTOCKVALUE></AVAILABILITY>
      var obj={}
      obj.id=element.id
      obj.name=element.name
      obj.manufacturer=element.manufacturer
      obj.type=element.type
      obj.color= element.color
      obj.price= element.price
    obj.avaibility = re
     jkNew.push(obj) 
    }
    
    

   
  });
 
} else 
if(mun === 'nouke' && avaiArray[2].length>0){ 

  var __FOUND=  avaiArray[2].find(function(product,index)

  { 
     product.DATAPAYLOAD= product.DATAPAYLOAD.replace(/(\r\n|\n|\r)/gm,"");

 
    re = product.DATAPAYLOAD
  re = re.replace("<AVAILABILITY>  <INSTOCKVALUE>","")
  re = re.replace("</INSTOCKVALUE></AVAILABILITY>","")

  
  if(product.id.toLowerCase() ===element.id)
    {//element.id,element.manufacturer,element.name,element.type,element.color,element.price,product.DATAPAYLOAD
      //<AVAILABILITY><INSTOCKVALUE>iii </INSTOCKVALUE></AVAILABILITY>
      var obj={}
      obj.id=element.id
      obj.name=element.name
      obj.manufacturer=element.manufacturer
      obj.type=element.type
      obj.color= element.color
      obj.price= element.price
    obj.avaibility = re
     jkNew.push(obj) 
    }
    
    


  });
 
}else if(mun === 'reps' && avaiArray[3].length>0){ 

   avaiArray[3].find(function(product,index)

  { 
     product.DATAPAYLOAD= product.DATAPAYLOAD.replace(/(\r\n|\n|\r)/gm,"");

 

    re = product.DATAPAYLOAD
  re = re.replace("<AVAILABILITY>  <INSTOCKVALUE>","")
  re = re.replace("</INSTOCKVALUE></AVAILABILITY>","")

 
  if(product.id.toLowerCase() ===element.id)
    {//element.id,element.manufacturer,element.name,element.type,element.color,element.price,product.DATAPAYLOAD
      //<AVAILABILITY><INSTOCKVALUE>iii </INSTOCKVALUE></AVAILABILITY>
      var obj={}
      obj.id=element.id
      obj.name=element.name
      obj.manufacturer=element.manufacturer
      obj.type=element.type
      obj.color= element.color
      obj.price= element.price
    obj.avaibility = re
     jkNew.push(obj) 
    }
    
    

   // return __FOUND
  });
 
}else if(mun === 'xoon' && avaiArray[4].length>0){ 

  var __FOUND=  avaiArray[4].find(function(product,index)

  { 
     product.DATAPAYLOAD= product.DATAPAYLOAD.replace(/(\r\n|\n|\r)/gm,"");

 
   
    re = product.DATAPAYLOAD
  re = re.replace("<AVAILABILITY>  <INSTOCKVALUE>","")
  re = re.replace("</INSTOCKVALUE></AVAILABILITY>","")

 
  
  if(product.id.toLowerCase() ===element.id)
    {//element.id,element.manufacturer,element.name,element.type,element.color,element.price,product.DATAPAYLOAD
      //<AVAILABILITY><INSTOCKVALUE>iii </INSTOCKVALUE></AVAILABILITY>
      var obj={}
      obj.id=element.id
      obj.name=element.name
      obj.manufacturer=element.manufacturer
      obj.type=element.type
      obj.color= element.color.join()
      obj.price= element.price
    obj.avaibility = re
     jkNew.push(obj) 
    }
    
    

  
  });
 
}


else jkNew.push(element)


})

function compare( a, b ) {
  if ( a.manufacturer < b.manufacturer){
    return -1;
  }
  if ( a.manufacturer> b.manufacturer ){
    return 1;
  }
  return 0;
}

jkNew.sort( compare );

    return jkNew
     
  };
  
  getAccessoriesData().then((data)=>this.setState({'accessories':data}))//Accessories
  


    }
 
   
    

      
    render() {  
      //datatoDisplay to check if filtered or original data will be shown
   let datatoDisplay = (this.state.filtered && this.state.filtered.length>0)?this.state.filtered: this.state.accessories
        return (  
             <div>
          
       
          <p>Heres the table of Accessories You can start typing to search for a name</p>
          <div>
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    name='task'
                    value={this.state.value}
                    onChange={this.handleChange}
                />
               
            </form>
        </div>
<div >
  
<Table catagory={ datatoDisplay } />
           </div>
             </div>
            

        );
    }
}
export default Accessories 

    

 
 