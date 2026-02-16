@echo off
set /p link="Pega el enlace de la cancion o playlist de YouTube: "
echo Descargando y convirtiendo a MP3 de alta calidad...
yt-dlp -x --audio-format mp3 --audio-quality 0 --yes-playlist --embed-thumbnail --add-metadata --ffmpeg-location . %link%
echo.
echo ¡Descarga completada! Ya puedes pasar tus archivos al iPhone.
pause
