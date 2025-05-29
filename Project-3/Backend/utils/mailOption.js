const createMailOption = (Contact) => {
  const mailOption = {
    from: `"Malav Adeshara" <${process.env.MAIL_USER}>`,
    to: Contact.email,
    subject: 'Contact Request Received - Thank You!',
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        body {
          background: #f0f4f8;
          margin: 0;
          padding: 20px;
          font-family: 'Segoe UI', sans-serif;
          color: #333;
        }

        .container {
          max-width: 600px;
          margin: auto;
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          padding: 30px;
          animation: fadeIn 0.8s ease-out;
        }

        h1 {
          color: #4f46e5;
          margin-bottom: 15px;
          font-size: 26px;
        }

        p {
          margin: 10px 0;
        }

        .highlight {
          color: #4f46e5;
          font-weight: 600;
        }

        .info-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
          font-size: 14px;
        }

        .info-table th, .info-table td {
          text-align: left;
          padding: 10px;
          border-bottom: 1px solid #e5e7eb;
        }

        .info-table th {
          background: #f9fafb;
          color: #555;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          margin-top: 20px;
          background: linear-gradient(135deg, #4f46e5, #6366f1);
          color: white !important;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          letter-spacing: 0.5px;
          transition: transform 0.2s ease-in-out;
          animation: pulse 1.5s infinite;
        }

        .cta-button:hover {
          transform: translateY(-2px) scale(1.05);
        }

        .cta-button svg {
          width: 20px;
          height: 20px;
          margin-right: 8px;
          fill: white;
        }

        .footer {
          margin-top: 30px;
          font-size: 13px;
          color: #777;
          text-align: center;
        }

        .footer a {
          color: #4f46e5;
          text-decoration: none;
          margin: 0 8px;
          display: inline-block;
          vertical-align: middle;
          width: 24px;
          height: 24px;
        }

        .footer svg {
          width: 24px;
          height: 24px;
          vertical-align: middle;
        }

        .checkmark {
          width: 70px;
          height: 70px;
          margin: 20px auto;
          display: block;
        }

        @media only screen and (max-width: 600px) {
          .container {
            padding: 20px;
          }

          h1 {
            font-size: 22px;
          }

          .cta-button {
            padding: 10px 18px;
            font-size: 14px;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Thank You, ${Contact.fullName.firstName}!</h1>
        <p>Your contact request has been received. Here’s what we got from you:</p>

        <table class="info-table">
          <tr>
            <th>Name</th>
            <td>${Contact.fullName.firstName} ${Contact.fullName.lastName}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>${Contact.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>${Contact.phoneNumber || 'N/A'}</td>
          </tr>
          <tr>
            <th>Message</th>
            <td>${Contact.message}</td>
          </tr>
        </table>

        <a href="https://github.com/malavadeshara" class="cta-button" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.5-4-1.5-.6-1.4-1.4-1.7-1.4-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 .1 1.6-.8 1.6-.8.6-1.2.1-1.7-.2-2-.8-.1-1.6-.4-1.6-2.1 0-.5.2-1 .5-1.3-.1-.2-.4-1.1.1-2.2 0 0 .9-.3 2.3 1a8 8 0 0 1 4.2 0c1.4-1.3 2.3-1 2.3-1 .5 1.1.2 2 .1 2.2.3.3.5.8.5 1.3 0 1.6-.8 2-1.6 2.1.3.2.6.7.6 1.4v2.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/>
          </svg>
          View GitHub
        </a>

        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" aria-hidden="true" focusable="false">
          <circle cx="26" cy="26" r="25" fill="none" stroke="#4f46e5" stroke-width="3"/>
          <path fill="none" stroke="#4f46e5" stroke-width="3" d="M14 27l8 8 16-18"/>
        </svg>

        <p class="footer" aria-label="Connect with me on social media">
          <a href="https://www.linkedin.com/in/malav-adeshara" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img">
              <path fill="#4f46e5" d="M4.98 3.5C3.34 3.5 2 4.85 2 6.5s1.34 3 2.98 3c1.64 0 2.98-1.35 2.98-3S6.62 3.5 4.98 3.5zM2 21.5h6v-11h-6v11zM9.5 10.5v11h6v-6c0-3.31-5-3.18-5 0v-5h6v-6h-6v6z"/>
            </svg>
          </a>
          <a href="https://wa.me/+91 8401249919" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img">
              <path fill="#4f46e5" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.149-.197.297-.758.967-.93 1.164-.172.198-.345.223-.642.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.172-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.172.198-.297.298-.495.099-.198.05-.371-.025-.52-.075-.148-.67-1.612-.92-2.207-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347z"/>
              <path fill="#4f46e5" d="M20.52 3.48A10.133 10.133 0 0 0 12 2C6.48 2 2 6.48 2 12c0 2.11.637 4.07 1.735 5.716L2 22l4.372-1.72A9.953 9.953 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.66-1.06-5.11-2.98-6.52zM12 20c-1.494 0-2.887-.43-4.08-1.17l-.292-.176-2.6 1.02 1.042-2.54-.183-.296A7.964 7.964 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
            </svg>
          </a>
          <a href="https://github.com/malavadeshara" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img">
              <path fill="#4f46e5" d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.5-4-1.5-.6-1.4-1.4-1.7-1.4-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 .1 1.6-.8 1.6-.8.6-1.2.1-1.7-.2-2-.8-.1-1.6-.4-1.6-2.1 0-.5.2-1 .5-1.3-.1-.2-.4-1.1.1-2.2 0 0 .9-.3 2.3 1a8 8 0 0 1 4.2 0c1.4-1.3 2.3-1 2.3-1 .5 1.1.2 2 .1 2.2.3.3.5.8.5 1.3 0 1.6-.8 2-1.6 2.1.3.2.6.7.6 1.4v2.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/>
            </svg>
          </a>
        </p>

      </div>
    </body>
    </html>
    `
  };

  return mailOption;
};

export default createMailOption;


// const createMailOption = (Contact) => {
//   const mailOption = {
//     from: `"Malav Adeshara" <${process.env.MAIL_USER}>`,
//     to: Contact.email,
//     subject: 'Contact Request Received - Thank You!',
//     html: `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <style>
//         @keyframes fadeIn {
//           0% { opacity: 0; transform: translateY(20px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes slideIn {
//           0% { opacity: 0; transform: translateX(-30px); }
//           100% { opacity: 1; transform: translateX(0); }
//         }

//         @keyframes bounce {
//           0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
//           40% { transform: translateY(-10px); }
//           60% { transform: translateY(-5px); }
//         }

//         @keyframes checkmarkDraw {
//           0% { stroke-dashoffset: 100; }
//           100% { stroke-dashoffset: 0; }
//         }

//         @keyframes circleGrow {
//           0% { transform: scale(0); opacity: 0; }
//           50% { opacity: 1; }
//           100% { transform: scale(1); opacity: 1; }
//         }

//         @keyframes socialHover {
//           0% { transform: translateY(0) scale(1); }
//           50% { transform: translateY(-3px) scale(1.1); }
//           100% { transform: translateY(0) scale(1); }
//         }

//         @keyframes gradientShift {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         body {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           margin: 0;
//           padding: 20px;
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           color: #333;
//           min-height: 100vh;
//         }

//         .container {
//           max-width: 600px;
//           margin: auto;
//           background: rgba(255, 255, 255, 0.95);
//           backdrop-filter: blur(10px);
//           border-radius: 20px;
//           box-shadow: 0 20px 40px rgba(0,0,0,0.15);
//           padding: 40px;
//           animation: fadeIn 1s ease-out;
//           border: 1px solid rgba(255, 255, 255, 0.2);
//         }

//         .header {
//           text-align: center;
//           margin-bottom: 30px;
//         }

//         h1 {
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           margin-bottom: 15px;
//           font-size: 28px;
//           font-weight: 700;
//           animation: slideIn 0.8s ease-out 0.3s both;
//         }

//         .welcome-text {
//           color: #666;
//           font-size: 16px;
//           margin-bottom: 20px;
//           animation: slideIn 0.8s ease-out 0.5s both;
//         }

//         .info-table {
//           width: 100%;
//           border-collapse: collapse;
//           margin: 30px 0;
//           font-size: 15px;
//           border-radius: 12px;
//           overflow: hidden;
//           box-shadow: 0 4px 15px rgba(0,0,0,0.08);
//           animation: slideIn 0.8s ease-out 0.7s both;
//         }

//         .info-table th, .info-table td {
//           text-align: left;
//           padding: 15px 20px;
//           border-bottom: 1px solid #f0f0f0;
//         }

//         .info-table th {
//           background: linear-gradient(135deg, #f8f9ff, #e8f0ff);
//           color: #4a5568;
//           font-weight: 600;
//           font-size: 14px;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//         }

//         .info-table td {
//           background: white;
//           color: #2d3748;
//         }

//         .info-table tr:last-child td {
//           border-bottom: none;
//         }

//         .cta-button {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           margin: 30px auto;
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           background-size: 200% 200%;
//           color: white !important;
//           padding: 15px 30px;
//           border-radius: 50px;
//           text-decoration: none;
//           font-weight: 600;
//           font-size: 16px;
//           letter-spacing: 0.5px;
//           transition: all 0.3s ease;
//           box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
//           animation: slideIn 0.8s ease-out 0.9s both, gradientShift 3s ease infinite;
//           text-align: center;
//           width: fit-content;
//         }

//         .cta-button:hover {
//           transform: translateY(-3px) scale(1.05);
//           box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
//         }

//         .cta-button svg {
//           width: 22px;
//           height: 22px;
//           margin-right: 10px;
//           fill: white;
//         }

//         .checkmark-container {
//           text-align: center;
//           margin: 30px 0;
//           animation: bounce 1s ease-out 1.2s both;
//         }

//         .checkmark {
//           width: 80px;
//           height: 80px;
//           animation: circleGrow 0.6s ease-out 1.2s both;
//         }

//         .checkmark circle {
//           animation: circleGrow 0.6s ease-out 1.2s both;
//         }

//         .checkmark path {
//           stroke-dasharray: 100;
//           stroke-dashoffset: 100;
//           animation: checkmarkDraw 0.8s ease-out 1.5s both;
//         }

//         .footer {
//           margin-top: 40px;
//           text-align: center;
//           animation: fadeIn 0.8s ease-out 1.4s both;
//         }

//         .footer-text {
//           font-size: 14px;
//           color: #666;
//           margin-bottom: 20px;
//         }

//         .social-links {
//           display: flex;
//           justify-content: center;
//           gap: 20px;
//           margin-top: 15px;
//         }

//         .social-link {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           width: 50px;
//           height: 50px;
//           background: linear-gradient(135deg, #f8f9ff, #e8f0ff);
//           border-radius: 50%;
//           text-decoration: none;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 15px rgba(0,0,0,0.1);
//         }

//         .social-link:hover {
//           transform: translateY(-5px) scale(1.1);
//           box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
//           animation: socialHover 0.6s ease;
//         }

//         .social-link svg {
//           width: 24px;
//           height: 24px;
//           transition: all 0.3s ease;
//         }

//         .social-link:hover svg {
//           fill: #667eea;
//           transform: scale(1.1);
//         }

//         .divider {
//           height: 2px;
//           background: linear-gradient(135deg, #667eea, #764ba2);
//           border: none;
//           border-radius: 2px;
//           margin: 30px 0;
//           opacity: 0.3;
//         }

//         @media only screen and (max-width: 600px) {
//           .container {
//             padding: 25px;
//             margin: 10px;
//           }

//           h1 {
//             font-size: 24px;
//           }

//           .cta-button {
//             padding: 12px 24px;
//             font-size: 14px;
//           }

//           .social-links {
//             gap: 15px;
//           }

//           .social-link {
//             width: 45px;
//             height: 45px;
//           }

//           .info-table th, .info-table td {
//             padding: 12px 15px;
//           }
//         }
//       </style>
//     </head>
//     <body>
//       <div class="container">
//         <div class="header">
//           <h1>Thank You, ${Contact.fullName.firstName}! ✨</h1>
//           <p class="welcome-text">Your contact request has been successfully received and processed.</p>
//         </div>

//         <hr class="divider">

//         <table class="info-table">
//           <tr>
//             <th>👤 Full Name</th>
//             <td>${Contact.fullName.firstName} ${Contact.fullName.lastName}</td>
//           </tr>
//           <tr>
//             <th>📧 Email</th>
//             <td>${Contact.email}</td>
//           </tr>
//           <tr>
//             <th>📱 Phone</th>
//             <td>${Contact.phoneNumber || 'Not provided'}</td>
//           </tr>
//           <tr>
//             <th>💬 Message</th>
//             <td>${Contact.message}</td>
//           </tr>
//         </table>

//         <div style="text-align: center;">
//           <a href="https://github.com/malavadeshara" class="cta-button" target="_blank" rel="noopener noreferrer">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
//               <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
//             </svg>
//             Explore My GitHub
//           </a>
//         </div>

//         <div class="checkmark-container">
//           <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" aria-hidden="true" focusable="false">
//             <circle cx="26" cy="26" r="25" fill="none" stroke="#667eea" stroke-width="3"/>
//             <path fill="none" stroke="#667eea" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M14 27l8 8 16-18"/>
//           </svg>
//         </div>

//         <hr class="divider">

//         <div class="footer">
//           <p class="footer-text">Let's stay connected! Find me on social media:</p>
//           <div class="social-links">
//             <a href="https://www.linkedin.com/in/malav-adeshara" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="social-link">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0077b5">
//                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//               </svg>
//             </a>
            
//             <a href="https://wa.me/+918401249919" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="social-link">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366">
//                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//               </svg>
//             </a>
            
//             <a href="https://github.com/malavadeshara" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="social-link">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#333">
//                 <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
//     </body>
//     </html>
//     `
//   };

//   return mailOption;
// };

// export default createMailOption;