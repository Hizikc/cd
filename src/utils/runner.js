import { spawn } from 'node:child_process';
import { once } from 'node:events';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import sea from 'node:sea';
import { APP_NAME } from '../conf/config.js';

const BASE_DIR = sea.isSea() ? path.dirname(process.execPath) : process.cwd();
const YTDLP_PATH = path.join(BASE_DIR, 'ds', 'yt-dlp.exe');
const FFMPEG_DIR = path.join(BASE_DIR, 'ds');

const VIDEO_DIR = path.join(os.homedir(), 'Videos', APP_NAME);
const AUDIO_DIR = path.join(os.homedir(), 'Music', APP_NAME);

export async function runDownload(url, format = 'mp4') {
  const args = [url, '--ffmpeg-location', FFMPEG_DIR];

  if (format === 'mp4') {
    fs.mkdirSync(VIDEO_DIR, { recursive: true });
    args.push(
      '-P', VIDEO_DIR,
      '-f', 'bv*+ba/b',
      '--merge-output-format', 'mp4',
      '-o', '%(title)s.%(ext)s'
    );
  } else if (format === 'mp3') {
    fs.mkdirSync(AUDIO_DIR, { recursive: true });
    args.push(
      '-P', AUDIO_DIR,
      '-x',
      '--audio-format', 'mp3',
      '--audio-quality', '0',
      '--embed-thumbnail',
      '--convert-thumbnails', 'jpg',
      '--add-metadata',
      '-o', '%(title)s.%(ext)s'
    );
  } else {
    return;
  }

  const proc = spawn(YTDLP_PATH, args, { stdio: 'inherit' });
  await once(proc, 'close');
}