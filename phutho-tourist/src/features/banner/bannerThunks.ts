import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebaseConfig";

export const fetchBannerData = createAsyncThunk(
  "banner/fetchBannerData",
  async () => {
    const videoRef = ref(storage, "banner/-b581-45d9-98eb-64676259fd20.mp4");
    const bannerVideoUrl = await getDownloadURL(videoRef);

    const imagePaths = [
      "banner/image1.png",
      "banner/image2.png",
      "banner/image3.png",
      "banner/image4.png",
      "banner/image5.png",
    ];

    const imageUrls = await Promise.all(
      imagePaths.map(async (path) => {
        const imageRef = ref(storage, path);
        return await getDownloadURL(imageRef);
      })
    );

    return { bannerVideoUrl, imageUrls };
  }
);
