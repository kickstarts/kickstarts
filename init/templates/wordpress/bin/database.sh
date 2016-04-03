#!/bin/bash

# USAGE: bash database.sh


# SETTINGS
# -------------------------------------------------------
DBUSER=root
DBPASS=root
DBHOST=localhost
DBEMAIL=vitorbritto@localhost
DBNAME=db_test


# EXECUTE SCRIPT
# -------------------------------------------------------


# Access
echo "→ Accessing MySQL..."
mysql --user=${DBUSER} -p${DBPASS}

# Create
echo "→ Creating Database..."
create database ${DBNAME};
echo "✔ Database ${DBNAME} successfully created!"

# Privileges
echo "→ Grantting privileges for user ${DBNAME}..."
GRANT usage ON *.* TO ${DBEMAIL} IDENTIFIED BY ${DBPASS};
GRANT CREATE, DROP, SELECT, INSERT, UPDATE, DELETE ON ${DBNAME}.* TO ${DBEMAIL};
flush privileges;
echo "✔ Privileges for ${DBUSER} successfully granted!"

# View Table
echo "→ Rendering data..."
mysql -u ${DBUSER} -e "show tables" ${DBNAME}
