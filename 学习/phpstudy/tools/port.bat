@echo off 
setlocal enableextensions
title phpStudy �˿�-���̲�ѯ

setlocal enabledelayedexpansion 
call :phpstudyport 80
set aname=!process_name!
call :phpstudyport 3306
set bname=!process_name!




echo.
echo �˿�����ռ�ã����ֶ��ر���ؽ���...
echo.
echo ��������˳�...
echo.
pause>nul

goto :eof
:phpstudyport 
echo.
set used=false
for /F "usebackq tokens=2,5" %%i in (`"netstat -ano|findstr  /C:":%1""`) do (  
for /F "tokens=2 delims=:" %%e in ("%%i") do ( 
set port=%%e
)

if '!port!'=='%1' call :phpStudyProcessName %%j && if not "!process_name!"=="" (echo !port! �˿��ѱ�PID:%%j !process_name! ����ռ��) && set used=true

) 

 if "!used!"=="false" echo %1 �˿�δռ��
goto :EOF 




:phpStudyProcessName
for /F "usebackq delims=, tokens=1" %%a in (`"tasklist /FI "PID eq %1" /FO CSV"`) do ( 
set process_name=%%~a
)


