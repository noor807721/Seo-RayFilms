const API = process.env.REACT_APP_API;

export const latestMovie = async () => {
  const res = await fetch(`${API}/carousal`);
  const data = await res.json();
  if (res.status === 201) {
    return data;
  } else {
    return [];
  }
};
export const SliderMovie = async (req) => {
  const res = await fetch(`${API}/${req}/1/7/-1`);
  const data = await res.json();
  if (res.status === 201) {
    return data;
  } else {
    return [];
  }
};
export const getSearch = async (title) => {
  try {
    const res = await fetch(`${API}/search?title=${title}`);
    const data = await res.json();
    return data;
  } catch (e) {
    return [];
  }
};

export const getDetails = async (imdbId) => {
  const res = await fetch(`${API}/${imdbId}`);
  const data = await res.json();
  if (res.status === 201) {
    return data;
  } else {
    return [];
  }
};
