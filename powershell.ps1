# Variables
$resourceGroupName = "example-resources"
$location = "East US"
$storageAccountName = "examplestorageacct$(Get-Random)"
$storageSkuName = "Standard_LRS"

# Create a new resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a new storage account
$storageAccount = New-AzStorageAccount -ResourceGroupName $resourceGroupName `
                                       -Name $storageAccountName `
                                       -Location $location `
                                       -SkuName $storageSkuName `
                                       -Kind "StorageV2" `
                                       -EnableHttpsTrafficOnly $true

# Output the storage account name and primary blob endpoint
Write-Host "Storage Account Name: $($storageAccount.StorageAccountName)"
Write-Host "Primary Blob Service Endpoint: $($storageAccount.PrimaryEndpoints.Blob)"