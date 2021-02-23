FROM python:3
WORKDIR /usr/src/projects/react-tracks
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "app/mamage.py", "runserver"]