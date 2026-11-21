import { spawn } from 'node:child_process';
import { once } from 'node:events';
import path from 'node:path';
import sea from 'node:sea';

const BASE_DIR = sea.isSea()
    ? path.dirname(process.execPath)
    : process.cwd();

const YTDLP_PATH = path.join(BASE_DIR, 'ds', 'yt-dlp.exe');
const FFMPEG_DIR = path.join(BASE_DIR, 'ds');

export async function runDownload(url, format = 'mp4') {
  const args = [url, '--ffmpeg-location', FFMPEG_DIR];

  if (format === 'mp4') {
    args.push('-f', 'bv*+ba/b', '--merge-output-format', 'mp4');
  } else if (format === 'mp3') {
    args.push('-x', '--audio-format', 'mp3', '--audio-quality', '0');
  } else {
    console.log('В разработке');
    return;
  }

  const proc = spawn(YTDLP_PATH, args, { stdio: 'inherit' });
  await once(proc, 'close');
}