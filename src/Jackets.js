
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
function checkavail(id){
  var avail = null;
 
  const getAvailData = async () => {
      
    const request = await fetch('https://bad-api-assignment.reaktor.com/availability/reps');
    
    const data = await request.json();

     data.response.find(function(obj,index){
 
      if(obj.id==id)
      {
       return obj
      }
 
     })
 

  };

      
}


export class Jackets extends Component {  
  constructor(props) {
    super(props);
    
    this.state = {
        avail:[],
        jackets: [],
        value:""
    };
    this.handleChange = this.handleChange.bind(this);
}


handleChange(event) {   
   this.setState({value: event.target.value}); 
   console.log(this.state.value) 

this.state.avail=this.state.jackets.filter(obj => {
  obj.name.includes("EW")
 
})
  console.log(this.state.avail)
} 
     
  componentDidMount() {


   
 const getJacketsData = async () => {
 var  manuArray =[]
 var jkNew = []
 var avaiArray = []
 var objArray = {}
    const request = await fetch('https://bad-api-assignment.reaktor.com/products/jackets');
  
    const jk = await request.json();

  jk.forEach(element => {
    if(!manuArray.includes(element.manufacturer)){
      manuArray.push(element.manufacturer)
      }
 // const request2 = await fetch('https://bad-api-assignment.reaktor.com/availability/'+element.manufacturer);
  
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
if(mun === 'derp'){ 

  var __FOUND=  avaiArray[0].find(function(product,index)

  { 
     product.DATAPAYLOAD= product.DATAPAYLOAD.replace(/(\r\n|\n|\r)/gm,"");

 
    //console.log(r)
    re = product.DATAPAYLOAD
  re = re.replace("<AVAILABILITY>  <INSTOCKVALUE>","")
  re = re.replace("</INSTOCKVALUE></AVAILABILITY>","")

   // console.log(re)
    //console.log(typeof product.DATAPAYLOAD)
    //var len= product.DATAPAYLOAD.length
     //console.log(eval(re))
  
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
 
}else
if(mun === 'abiplos'){ 

  var __FOUND=  avaiArray[1].find(function(product,index)

  { 
     product.DATAPAYLOAD= product.DATAPAYLOAD.replace(/(\r\n|\n|\r)/gm,"");

 
    //console.log(r)
    re = product.DATAPAYLOAD
  re = re.replace("<AVAILABILITY>  <INSTOCKVALUE>","")
  re = re.replace("</INSTOCKVALUE></AVAILABILITY>","")

   // console.log(re)
    //console.log(typeof product.DATAPAYLOAD)
    //var len= product.DATAPAYLOAD.length
     //console.log(eval(re))
  
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
 
} else 
if(mun === 'nouke'){ 

  var __FOUND=  avaiArray[2].find(function(product,index)

  { 
     product.DATAPAYLOAD= product.DATAPAYLOAD.replace(/(\r\n|\n|\r)/gm,"");

 
    //console.log(r)
    re = product.DATAPAYLOAD
  re = re.replace("<AVAILABILITY>  <INSTOCKVALUE>","")
  re = re.replace("</INSTOCKVALUE></AVAILABILITY>","")

   // console.log(re)
    //console.log(typeof product.DATAPAYLOAD)
    //var len= product.DATAPAYLOAD.length
     //console.log(eval(re))
  
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
 
}else if(mun === 'reps'){ 

  var __FOUND=  avaiArray[3].find(function(product,index)

  { 
     product.DATAPAYLOAD= product.DATAPAYLOAD.replace(/(\r\n|\n|\r)/gm,"");

 
    //console.log(r)
    re = product.DATAPAYLOAD
  re = re.replace("<AVAILABILITY>  <INSTOCKVALUE>","")
  re = re.replace("</INSTOCKVALUE></AVAILABILITY>","")

   // console.log(re)
    //console.log(typeof product.DATAPAYLOAD)
    //var len= product.DATAPAYLOAD.length
     //console.log(eval(re))
  
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
 
}else if(mun === 'xoon'){ 

  var __FOUND=  avaiArray[4].find(function(product,index)

  { 
     product.DATAPAYLOAD= product.DATAPAYLOAD.replace(/(\r\n|\n|\r)/gm,"");

 
    //console.log(r)
    re = product.DATAPAYLOAD
  re = re.replace("<AVAILABILITY>  <INSTOCKVALUE>","")
  re = re.replace("</INSTOCKVALUE></AVAILABILITY>","")

   // console.log(re)
    //console.log(typeof product.DATAPAYLOAD)
    //var len= product.DATAPAYLOAD.length
     //console.log(eval(re))
  
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
 
}


else jkNew.push(element)


})



    return jkNew
     
  };
  
  getJacketsData().then((data)=>this.setState({'jackets':data}))//Jackets
  


    }
 
    // var result = jsObjects.filter(obj => {
    //   return obj.b === 6
    // })
    // this.state.jackets.filter(obj => {
    //   return obj.name === event.target.value
    // }).bind(this)
    

      
    render() {  
   
        return (  
             <div>
          
      <AVAILABILITY><INSTOCKVALUE>How do I display this text?</INSTOCKVALUE> </AVAILABILITY>  
          <p>Heres the table of Jackets</p>
          <form>
  <label>
    Search:
    <input type="text" name="name" onChange={this.handleChange}/>
  </label>

</form>
<div >
<Table catagory={ this.state.jackets } />
           </div>
             </div>
            

        );
    }
}
export default Jackets 

    

 
 