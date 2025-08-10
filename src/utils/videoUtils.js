export const getYouTubeThumbnail = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  if (match && match[2].length === 11) {
    return `https://img.youtube.com/vi/${match[2]}/maxresdefault.jpg`;
  }
  return null;
};

export const getFacebookThumbnail = (url) => {
  try {
    const videoId = url.match(/videos\/(\d+)/)[1] || url.match(/v\/(\w+)/)[1];
    return `https://graph.facebook.com/${videoId}/picture?type=large`;
  } catch {
    return null;
  }
};
