#!bin/sh

# We want directories to have a mode of 755
umask 022

# Copy BG-RDF into assets for loading into our exported RDF graph
mkdir -p ./src/assets/bg-rdf
cp -p ./BG-RDF/schema/ontology.ttl ./src/assets/bg-rdf
mkdir -p ./src/assets/bg-rdf/templates
cp -p ./BG-RDF/templates/*.ttl ./src/assets/bg-rdf/templates

# Copy oxigraph into assets
mkdir -p ./src/assets/oxigraph
cp -p ./node_modules/oxigraph/web* ./src/assets/oxigraph
