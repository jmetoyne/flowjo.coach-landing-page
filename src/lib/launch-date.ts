export const launchDate = new Date("2024-09-30T15:00:00Z");

export function getCountdown(target: Date, now = new Date()) {
  const diff = Math.max(target.getTime() - now.getTime(), 0);
  const seconds = Math.floor(diff / 1000);
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return { days, hours, minutes, seconds: remainingSeconds };
}
