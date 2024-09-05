# brc-analytics

# BRC Analytics Data Catalog

## Building the data source files

Create a Python virtual environment and install requirements:

```shell
python3 -m venv ./venv
source ./venv/bin/activate
pip install -r ./files/requirements.txt
```

Then run the script:

```shell
python3 ./files/build-genomes-files.py
```

The environment can be deactivated by running `deactivate`, and re-activated by running `source ./venv/bin/activate`
again.
