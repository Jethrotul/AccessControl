<template>
  <div>
    <progress :value="uploadPicture.uploadValue" max="100" id="uploader">0%</progress>
    <input type="file" name="inputPic" @change="onFileSelected" />
    <button @click="upLoad">Upload</button>
    <img width="320" :src="uploadPicture.picture" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { EventBus } from "@/bus";


@Component({})
export default class Worker extends Vue {
  uploadPicture = {
    selectedFile: null,
    uploadValue: 0,
    picture: "",
  };

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
}
</script>

<style scoped>
img.preview {
  width: 100px;
}
</style>