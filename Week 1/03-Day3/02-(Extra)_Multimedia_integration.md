### **(Extra) Multimedia Integration: Audio and Video**

#### **Developmental Outcome**  
By the end of this lesson, learners will:  
1. Understand how to embed audio and video content using HTML.  
2. Learn about key attributes for controlling multimedia playback.  
3. Be able to create engaging webpages with audio and video elements.

---

#### **Bringing Webpages to Life**  

A webpage full of text and images is great, but adding multimedia like audio and video can make it truly engaging! Imagine listening to a podcast while scrolling a blog or watching a product demo on a landing page—these experiences enhance the way users interact with content.  

In this lesson, we’ll explore how to integrate audio and video into your webpages seamlessly.

---

#### **Main Content: Using the `<audio>` and `<video>` Tags**  

##### **1. Embedding Audio**  
The `<audio>` tag is used to add audio files to a webpage.  
**Example:**  
```html
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

- **`controls`:** Adds play, pause, and volume controls.  
- **Use Case:** Embedding background music, podcasts, or sound effects.  

---

##### **2. Embedding Video**  
The `<video>` tag is used to add videos to a webpage.  
**Example:**  
```html
<video controls width="500">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>
```

- **`controls`:** Adds playback controls.  
- **`width`:** Sets the width of the video.  
- **Use Case:** Embedding tutorials, product demonstrations, or promotional content.  

---

##### **3. Key Attributes for Multimedia**  
- **`autoplay`:** Starts playing automatically (use sparingly for user experience).  
- **`loop`:** Replays the media continuously.  
- **`muted`:** Mutes the audio by default.  
- **`poster`:** For videos, sets an image to display before playback begins.  

**Example of a Video with Additional Attributes:**  
```html
<video controls autoplay muted loop poster="preview.jpg">
  <source src="promo.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>
```

---

#### **Key Points**  
- Use the `<audio>` and `<video>` tags to integrate multimedia.  
- Provide `controls` to give users playback options.  
- Multimedia makes webpages interactive and engaging but should be used thoughtfully to avoid overwhelming users.  
