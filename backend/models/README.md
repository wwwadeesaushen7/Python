# Bundled face detector

`face_detection_yunet_2023mar.onnx` is OpenCV Zoo's YuNet face detector, used
through the existing OpenCV CPU runtime. It is 232,589 bytes and requires no
network download or API key at runtime.

- OpenCV Zoo revision: `47534e27c9851bb1128ccc0102f1145e27f23f98`.
- Official model: `models/face_detection_yunet/face_detection_yunet_2023mar.onnx`.
- SHA-256: `8f2383e4dd3cfbb4553ea8718107fc0423210dc964f9f4280604804ed2552fa4`.
- Model bytes were obtained from the author's training repository at
  `dca340aa082c71081a68d17db8e58b33a58a914b`, `onnx/yunet_s_640_640.onnx`, and
  verified against the SHA-256 and size in OpenCV Zoo's Git LFS pointer.
- [OpenCV Zoo](https://github.com/opencv/opencv_zoo/tree/47534e27c9851bb1128ccc0102f1145e27f23f98/models/face_detection_yunet)
  distributes this model under the included MIT license (`LICENSE-YUNET`). The
  author's repository's BSD license is also retained (`LICENSE-YUNET-SOURCE`).

This detects faces and facial landmarks. Active-speaker selection remains a
visual heuristic; this model does not identify whose voice is in the audio.
