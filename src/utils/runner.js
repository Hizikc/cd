import { spawn } from 'node:child_process';
import { once } from 'node:events';
import path from 'node:path';
import sea from 'node:sea';

const BASE_DIR = sea.isSea()
    ? path.dirname(process.execPath)
    : process.cwd();

const YTDLP_PATH = path.join(BASE_DIR, 'ds', 'yt-dlp.exe');
const FFMPEG_DIR = path.join(BASE_DIR, 'ds');

export async function runDownload(url) {
    const args = [
    url,
    '--ffmpeg-location', FFMPEG,
    '-f', 'bv*+ba/b',
    '--merge-output-format', 'mp4' 
    ];

    const proc = spawn(YTDLP, args, { stdio: 'inherit'});
    await once(proc, 'close');
}