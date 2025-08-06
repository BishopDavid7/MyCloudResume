# ☁️ MyCloudResume

A static cloud resume project built with AWS — featuring S3 + CloudFront for hosting, and a visitor counter powered by Lambda, API Gateway, and DynamoDB. Inspired by the [Cloud Resume Challenge](https://cloudresumechallenge.dev/).

---

## 🎯 Overview

This project showcases your cloud engineering skills by:

- Hosting a personal resume site as a static website on **Amazon S3**
- Distributing it globally via **CloudFront** with **HTTPS support**
- Implementing a **visitor counter** backend using **AWS Lambda**, **API Gateway**, and **DynamoDB**
- (Optional) Managing infrastructure via **AWS Console**, **Terraform**, or **CloudFormation**

---

## 📦 Architecture Snapshot

- **Frontend** – Static HTML, CSS, JS hosted on S3 + CloudFront  
- **API** – AWS Lambda function behind API Gateway for visitor counting  
- **Database** – DynamoDB table to store the count  
- **Domain & Security** – ACM certificate + custom domain via Route 53  
- **CI/CD (Optional)** – GitHub Actions or Lambda sync for automated deployment

📊 **Architecture Diagram:**  
![Architecture Diagram](https://i.postimg.cc/8PYsvrkx/Chat-GPT-Image-Aug-6-2025-12-28-18-PM.png)

      +--------------------+
      |    CloudFront      |
      | (CDN Distribution) |
      +--------+-----------+
               |
               v
      +--------+----------+
      |     S3 Bucket     | <--- Hosts static site (HTML, CSS, JS)
      | (Static Website)  |
      +--------+----------+
               |
               v
    +----------+----------+
    |  JavaScript (Frontend) |
    |   script.js invokes    |
    |     API Gateway        |
    +----------+----------+
               |
               v
    +----------+----------+
    |      AWS Lambda      | <--- Updates and retrieves visitor count
    +----------+----------+
               |
               v
      +--------+---------+
      |  DynamoDB Table   | <--- Stores visit count
      +------------------+



---

MyCloudResume/
├── README.md                  # Project overview and setup guide
├── index.html                 # Main resume HTML file
├── style.css                  # Styling for the resume webpage
├── script.js                  # JavaScript for dynamic API interaction
├── assets/                    # (Optional) Images, icons, etc.
│   └── profile.jpg
├── backend/
│   ├── lambda_function.py     # Lambda function for visitor counter
│   ├── requirements.txt       # Python dependencies for Lambda
├── cloudformation/
│   └── template.yaml          # CloudFormation template (optional IaC)
└── diagrams/
    └── architecture.png       # Architecture diagram


## 🛠️ Features

- ✅ Static resume hosted on S3 and served via CloudFront
- ✅ HTTPS-secured via ACM and CloudFront
- ✅ Dynamic visitor count using API + Lambda + DynamoDB
- ✅ Optimized performance with asset caching
- ✅ Optional IaC support (Terraform or CloudFormation)
- ✅ CI/CD for seamless deployment

---

## 🚀 Deployment via AWS Console

1. **Frontend (S3)**  
   - Log in to AWS Console → S3 → Create a bucket  
   - Enable **Static website hosting**  
   - Upload `index.html`, `style.css`, `script.js`, etc.  
   - Configure public access (or use OAI for private access)

2. **CDN (CloudFront)**  
   - Create a CloudFront distribution  
   - Set the origin to your S3 bucket website endpoint  
   - Configure HTTPS redirection and default root object (`index.html`)

3. **Database (DynamoDB)**  
   - Create a table (e.g., `VisitorCount`)  
   - Set partition key: `id` (type: string), with a value like `visits`

4. **Backend (Lambda)**  
   - Create a Lambda function using `lambda_function.py`  
   - Grant it access to DynamoDB (IAM role with appropriate permissions)

5. **API (API Gateway)**  
   - Create an **HTTP API** and link it to your Lambda  
   - Enable **CORS** for frontend JavaScript to call it

6. **Frontend JS**  
   - Update `script.js` to call the API Gateway endpoint  
   - Display visitor count dynamically in the resume page

7. **Custom Domain (Optional)**  
   - Request an SSL cert via **ACM**  
   - Use **Route 53** to map your domain to the CloudFront distribution

8. **Cache Invalidation (Optional)**  
   - Invalidate CloudFront cache if updating static files

---

## 🧪 Deployment via Terraform (Optional)

To automate provisioning, split your infrastructure as follows:

- `s3.tf` – S3 bucket and static site config
- `cloudfront.tf` – CloudFront distribution + OAI
- `dynamodb.tf` – DynamoDB table definition
- `lambda.tf` – Lambda function + permissions
- `apigw.tf` – API Gateway setup
- `iam.tf` – IAM roles and policies
- `outputs.tf` – CloudFront domain, API endpoint, etc.

Then run:

```bash
terraform init
terraform apply



