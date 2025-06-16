#!/usr/bin/env bash

# 1. Create a Python virtual environment in the “.venv” directory
#    - python3 -m venv .venv : uses the built‐in venv module to scaffold a new venv
python3 -m venv .venv

# 2. Detect OS and activate the venv accordingly
#    - $OSTYPE is set by bash: “darwin” for macOS, “linux-gnu” for Linux, “msys”/“cygwin” for Git Bash on Windows
if [[ "$OSTYPE" == "darwin"* ]] || [[ "$OSTYPE" == "linux-gnu"* ]]; then
  # macOS or Linux: source the Unix‐style activate script
  source .venv/bin/activate
elif [[ "$OSTYPE" == "msys"* ]] || [[ "$OSTYPE" == "cygwin"* ]]; then
  # Windows Git Bash: source the Windows‐folder activate script
  source .venv/Scripts/activate
else
  echo "Error: Unsupported OS type: $OSTYPE"
  exit 1
fi

# 3. Install Python dependencies from requirements.txt
#    - pip install -r requirements.txt : reads the file and installs listed packages
pip install -r requirements.txt
# ensure CORS package is present
pip install django-cors-headers

# 4. Install Node.js dependencies
#    - npm install : reads package.json and installs all JS dependencies
npm install

# 5. Create .env file for Django if it doesn't exist
ENV_FILE="backend-drf/.env"
echo "Ensuring .env exists at $ENV_FILE"
if [ ! -f "$ENV_FILE" ]; then
  cat <<EOF > "$ENV_FILE"
SECRET_KEY="your-very-secret-key-here"
DEBUG=True
EOF
  echo ".env created."
else
  echo ".env already exists, skipping."
fi

# 6. Finished
echo "Environment setup complete. Virtualenv is active."