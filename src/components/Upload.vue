<template>
  <div>
    <img width="300" :src="uploadPicture.picture" />
    <progress :value="uploadPicture.uploadValue" max="100" id="uploader">0%</progress>
    <input type="file" name="inputPic" accept="image/*" @change="onFileSelected" />
    <button @click="upLoad">Upload</button>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { EventBus } from "@/bus";
import { IWorker } from "../IWorker";

@Component({})
export default class Worker extends Vue {
  uploadPicture = {
    selectedFile: null,
    uploadValue: 0,
    picture: "https://firebasestorage.googleapis.com/v0/b/accesscontrolvue.appspot.com/o/img%2Fperfil_default.jpg?alt=media&token=6489451c-9ef8-4365-947d-d8b6b862714a",
  };

  created() {
    EventBus.$on("editWorker", (worker: IWorker) => {
      this.uploadPicture.picture = worker.urlPic;
    });
  }

  newWorker (){
    this.uploadPicture.picture = "https://firebasestorage.googleapis.com/v0/b/accesscontrolvue.appspot.com/o/img%2Fperfil_default.jpg?alt=media&token=6489451c-9ef8-4365-947d-d8b6b862714a";
    console.log("hola pic");
  }
  onFileSelected(event) {
    this.uploadPicture.selectedFile = event.target.files[0];
  }

  upLoad() {
    const storageRef = firebase
      .storage()
      .ref(`/img/${this.uploadPicture.selectedFile.name}`);
    const task = storageRef.put(this.uploadPicture.selectedFile);

    task.on(
      "state_changed",
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.uploadPicture.uploadValue = percentage;
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        this.uploadPicture.uploadValue = 100;
        task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.uploadPicture.picture = downloadURL;
          this.$emit("urlPic", downloadURL);
        });
      }
    );
  }

  // getImage (e){
  //   const image = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(image);
  //   reader.onload = (e: any) => {
  //     this.uploadPicture.avatar = e.target.result;
  //   }
  // }
}
</script>

<style scoped>
img.preview {
  width: 100px;
}
</style>