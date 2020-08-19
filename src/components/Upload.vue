<template>
  <div>
    <div>
      <p>Upload an image to Firebase:</p>
      <!-- <input type="file" @change="previewImage" accept="image/*" /> -->
    </div>
    <div>
      <p>
        <!-- Progress: {{uploadValue.toFixed()+"%"}} -->
        <!-- <progress -->
          <!-- id="progress"
          :value="uploadValue"
          max="100" -->
        <!-- ></progress> -->
      </p>
    </div>
    <!-- <div v-if="imageData!=null">
      <img class="preview" :src="picture" />
      <br /> -->
      <!-- <button @click="onUpload">Upload</button> -->
      <button>Aceptar</button>
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue,  } from "vue-property-decorator";
import { db } from "../firebase";
import firebase from 'firebase';


@Component({})
export default class Worker extends Vue {
//     imageData: null;
//     picture: null;
//     uploadValue: 0
	
  
//    previewImage(event: any) {
//       this.uploadValue=0;
//       this.picture=null;
//       this.imageData = event.target.files[0];
//     },

//     onUpload(){
//       this.picture=null;
//       const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
//       storageRef.on(`state_changed`,snapshot=>{
//         this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
//       }, error=>{console.log(error.message)},
//       ()=>{this.uploadValue=100;
//         storageRef.snapshot.ref.getDownloadURL().then((url)=>{
//           this.picture =url;
//         });
//       }
//       );
//     }

}


</script>


<style scoped>
img.preview {
  width: 200px;
}
</style>