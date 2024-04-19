<template>

<div v-show="!isEditView">


<h1>User profile</h1>
<img :src="image">

<span>Name: </span><b id="name">{{ name }}</b>

<hr />

<span>Email: </span><b id="email">{{ email }}</b>

<hr />

<span>Interests: </span><b id="interests">{{ interests }}</b>

<hr />


<button @click="handleEditProfile">Edit profile</button>

</div>




<div v-show="isEditView">


<h1>User profile</h1>
<img :src="image">

<span>Name: </span><input type="text" id="input-name" v-model="name"/>

<hr />

<span>Email: </span><input type="text" id="input-email" v-model="email"/>

<hr />

<span>Interests: </span><input type="text" id="input-interests" v-model="interests"/>

<hr />

<button @click="displayView">Update profile</button>

</div>


</template>


<script>

import image from "./Photo.jpg"

export default{

  name:"app",

  data(){

    return{

      image:image,
      name:"",
      email:"",
      interests:"",
      isEditView: false

    }


  },

 async created(){

    const userData = await this.fetchUserProfile()

    this.name = userData.name
    this.email = userData.email
    this.interests = userData.interests

  },

methods:{
    handleEditProfile(){

      this.isEditView = true
  },

  async updateUserProfile(payload) {
            const res = await fetch('update-profile', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            return await res.json()


  },

  async displayView() {
            const payload = {
                name: this.name,
                email: this.email,
                interests: this.interests
            }
            const resJson = await this.updateUserProfile(payload)
            console.log(resJson)


  this.isEditView = false


 
  },

  async fetchUserProfile(){

   const res = await fetch('get-profile')

   return await res.json()


    }


  }




}



</script>



<style>

img{

width: 320px;
height: 320px;
display: block;
margin-bottom: 35px;

}

div{

margin:auto;
width:80%;


}

hr{

width: 400px;

margin: 25px 0px;


}

button{

padding:10px;
width:150px;
font-size: 15px;
border: 1px solid black;
border-radius: 5px;


}

button:hover{

cursor: pointer;

}


input{

width: 200px;
padding:10px;
font-size:15px;
}




</style>