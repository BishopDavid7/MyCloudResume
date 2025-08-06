# MyCloudResume ☁️

Static cloud resume project built with AWS (S3 + CloudFront for hosting) and a visitor counter implemented via Lambda, API Gateway, and DynamoDB — following the Cloud Resume Challenge model.

## 🎯 Overview

This project demonstrates your cloud engineering skills by:

- Hosting a personal resume site as a static website on **Amazon S3**.
- Distributing globally with **CloudFront** (HTTPS support included).
- Implementing a visitor counter backend using **AWS Lambda**, **API Gateway**, and **DynamoDB**.
- (Optional) Managing the infrastructure via **AWS Console**, **Terraform**, or **CloudFormation**.

---

## 📦 Architecture Snapshot

- **Frontend** – static HTML, CSS, JS hosted via S3 + CloudFront  
- **API** – AWS Lambda function behind API Gateway handling visitor count  
- **Database** – DynamoDB table storing visits  
- **Domain & Security** – AWS Certificate Manager (ACM) + custom domain via Route 53  
- **CI/CD (optional)** – Automated deployment via GitHub Actions or Lambda synchronization  

---

          +--------------------+
          |    CloudFront      |
          | (CDN Distribution) |
          +--------+-----------+
                   |
                   v
          +--------+----------+
          |    S3 Bucket       | <--- Hosts static site (HTML, CSS, JS)
          | (Static Website)   |
          +--------+-----------+
                   |
                   v
        +----------+----------+
        |  JavaScript (Frontend)|
        |  script.js invokes    |
        |  API Gateway          |
        +----------+----------+
                   |
                   v
        +----------+----------+
        |      AWS Lambda      | <--- Updates and retrieves visitor count
        +----------+----------+
                   |
                   v
          +--------+---------+
          |  DynamoDB Table   | <--- Stores visit count or user data
          +------------------+



## 🛠️ Features

- ✅ Static resume served via global CDN (CloudFront)
- ✅ Secure site using HTTPS by default
- ✅ Visitor count dynamically fetched & incremented
- ✅ Caching of static assets for performance
- ✅ Optional infrastructure as code (Terraform or CloudFormation)
- ✅ CI/CD integration for automated updates

---

## 🚀 Deploying via AWS Console

1. **Frontend**:  
   - Log in to AWS Console → S3 → Create a bucket → Enable **Static website hosting** → Upload `index.html` and other static files  
   - Public access or via OAI if private

2. **CloudFront**:  
   - Create a distribution with the S3 bucket as origin  
   - Configure viewer protocol (redirect to HTTPS), default root object (`index.html`), and cache settings

3. **DynamoDB & Lambda**:  
   - DynamoDB table (e.g. `VisitorCount`) with primary key `id=visits`  
   - Create Lambda function to read/update the counter  
   - Grant appropriate IAM permissions

4. **API Gateway**:  
   - Create an HTTP API integrated with Lambda  
   - Enable CORS so your site can call the API securely

5. **Frontend JS**:  
   - Fetch visitor count via API and display it on the page  

6. **Custom Domain (Optional)**:  
   - Request SSL certificate via ACM → Use Route 53 to add CNAME record pointing to CloudFront

7. **Invalidate Cache (Optional)**:  
   - Invalidate CloudFront when updating frontend site files

---

## 🧪 Deploying via Terraform (optional)

If you're managing infrastructure-as-code yourself, set up:

- `s3.tf` (bucket definition + website configuration)
- `cloudfront.tf` (distribution + OAI)
- `dynamodb.tf` (table for visitor counter)
- `lambda.tf` + `iam.tf` (Lambda function + IAM roles/policies)
- `apigw.tf` (API Gateway integration)
- `outputs.tf` (to output CloudFront domain, API invoke URL)
- Use `terraform init` → `apply` to provision everything
- Use GitHub Actions or CLI scripts to deploy new static content to S3 and trigger invalidations

---

## ⚙️ File Structure

MyCloudResume/
├── README.md                  # Project overview and setup guide
├── index.html                 # Main resume HTML file
├── style.css                  # Styling for the resume webpage
├── script.js                  # JavaScript to interact with backend (e.g., visitor count)
├── assets/                    # (Optional) Folder for images, icons, etc.
│   └── profile.jpg
├── backend/
│   ├── lambda_function.py     # AWS Lambda function to count page visits
│   ├── requirements.txt       # Dependencies for the Lambda function
├── cloudformation/
│   └── template.yaml          # Optional: IaC template for provisioning resources
└── diagrams/
    └── architecture.png       # Architecture diagram for the Cloud Resume Challenge



