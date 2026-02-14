const { BlobServiceClient } = require("@azure/storage-blob");

let containerClient;

const getContainerClient = () => {
  if (!containerClient) {
    const blobServiceClient =
      BlobServiceClient.fromConnectionString(
        process.env.AZURE_STORAGE_CONNECTION_STRING
      );

    containerClient = blobServiceClient.getContainerClient(
      "intern-submissions"
    );
  }
  return containerClient;
};

module.exports = getContainerClient;
