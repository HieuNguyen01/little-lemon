export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state, action) {
  const selected = new Date(action.date);
  return fetchAPI(selected);
}
