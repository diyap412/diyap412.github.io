import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.datasets import fetch_california_housing
from sklearn.preprocessing import StandardScaler
import joblib
import streamlit as st # type: ignore

# Load the dataset
data = fetch_california_housing()
df = pd.DataFrame(data.data, columns=data.feature_names)
df['Price'] = data.target

# Display dataset information
print(df.head())
print(df.info())

# Check for missing values
print(df.isnull().sum())

# Summary statistics
print(df.describe())

# Visualize the distribution of the target variable (Price)
sns.histplot(df['Price'], kde=True)
plt.title('Distribution of House Prices')
plt.show()

# Correlation matrix
corr_matrix = df.corr()
sns.heatmap(corr_matrix, annot=True, cmap='coolwarm')
plt.title('Correlation Matrix')
plt.show()

# Split features (X) and target (y)
X = df.drop('Price', axis=1)
y = df['Price']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Optional: Feature scaling
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Initialize the model
model = LinearRegression()

# Train the model
model.fit(X_train, y_train)

# Predict on the test set
y_pred = model.predict(X_test)

# Calculate evaluation metrics
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"Mean Squared Error: {mse}")
print(f"R-squared: {r2}")

# Visualize predictions vs actual values
plt.scatter(y_test, y_pred)
plt.xlabel('Actual Prices')
plt.ylabel('Predicted Prices')
plt.title('Actual vs Predicted House Prices')
plt.show()

# Save the model
joblib.dump(model, 'house_price_model.pkl')

# Load the model (to test loading and saving)
loaded_model = joblib.load('house_price_model.pkl')

# Streamlit UI for prediction
st.title('House Price Prediction')
st.write('Enter the features to predict the house price:')

# Input fields for features (adjust as per actual features in the dataset)
feature1 = st.number_input('Feature 1 (e.g., MedInc)', value=0.0)
feature2 = st.number_input('Feature 2 (e.g., HouseAge)', value=0.0)
feature3 = st.number_input('Feature 3 (e.g., AveRooms)', value=0.0)
feature4 = st.number_input('Feature 4 (e.g., AveOccup)', value=0.0)
feature5 = st.number_input('Feature 5 (e.g., Latitude)', value=0.0)
feature6 = st.number_input('Feature 6 (e.g., Longitude)', value=0.0)
