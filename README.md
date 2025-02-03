# Email Spam Classifier - Frontend

This is the frontend for the Email Spam Classifier application. The application takes an email as input and classifies it as Spam or Not Spam using a machine learning model.


## 🚀 Features

* User-Friendly UI: Built using React and Material-UI (MUI).

* Real-time Classification: Sends user input to the backend and displays results instantly.

* Error Handling: Displays errors if the classification fails.

* Responsive Design: Works across different devices.


## 🛠 Tech Stack


* React.js (Frontend framework)

* Material-UI (MUI) (For UI components)

* Axios (For API calls)

* AWS S3 (For deployment)


## 📦 Installation


### 1️⃣ Clone the Repository


```bash
  git clone https://github.com/MTech-Applied-AI/spam-classifier-fe.git
  cd spam-classifier-fe
```

### 2️⃣ Install Dependencies

```bash
  npm install
```

#### 3️⃣ Start the Development Server

```bash
  npm run start
```

The app will be available at http://localhost:3000.


### 4️⃣ Build for Production

```bash
  npm run build
```

This will create an optimized build in the build/ folder.


### 📡 API Integration

The frontend communicates with the Spam Classification API.

API Endpoint

POST /classify

Request Body:

```json
{
  "email": "Your email text here"
}
```

```json
Response:

{
  "prediction": "spam"  // or "not spam"
}
```


### 🚀 Deployment (AWS S3)


1️⃣ Build the project

```bash
  npm run build
```


2️⃣ Upload to AWS S3

If using the AWS CLI:

```bash
  aws s3 sync build/ s3://your-bucket-name --acl public-read
```


3️⃣ Set up Public Access

Go to S3 Bucket → Permissions → Bucket Policy.

Add the following policy (replace your-bucket-name):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```


Enable Static Website Hosting under the Properties tab.


### 💡 Future Improvements


* Add authentication (e.g., JWT login system).

* Support multiple email classifications at once.

* Deploy on CloudFront for HTTPS security.


### 🙌 Contributors
- Narayan Khanna 📧 [narayankhanna7@gmail.com]
- Abhishek 📧 [Abhisheksen.sa@gmail.com]
- Archita 📧 [archita2528@gmail.com]
- Shivraj 📧 [shivrajhulwan7@gmail.com]



### Current Design

![image](https://github.com/user-attachments/assets/3f36f416-a724-46f4-8c34-003408747466)
