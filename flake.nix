{
    description = "expose correct ruby and bundler versions for this project.";

    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";
        flake-utils.url = "github:numtide/flake-utils";
    };

    nixConfig = {
        permittedInsecurePackages = [
            "ruby-2.5.1"
        ];
    };

    outputs = { self, nixpkgs, flake-utils }:
        flake-utils.lib.eachDefaultSystem (system:
            let 
                pkgs = import nixpkgs {
                    inherit system;
                };

                #openssl_1_0_2 = pkgs.openssl.override { version = "1.0.2"; src = ...; };

                ruby_2_5_1 = pkgs.stdenv.mkDerivation {
                    name = "ruby-2.5.1";
                    src = pkgs.fetchurl {
                    url = "https://cache.ruby-lang.org/pub/ruby/2.5/ruby-2.5.1.tar.gz";
                    sha256 = "dac81822325b79c3ba9532b048c2123357d3310b2b40024202f360251d9829b1";
                    };
                    buildInputs = [ pkgs.zlib pkgs.openssl_1_1 pkgs.bundler ];
                };

                obsoleteEnv = pkgs.stdenv.mkDerivation {
                    name = "obsolete-ruby-env";
                    buildInputs = [
                        ruby_2_5_1
                        pkgs.bundler
                        pkgs.zlib
                        pkgs.openssl_1_1
                        pkgs.nodejs
                    ];
                };

                shellHook = ''
                    echo "Ruby and Bundler environment activated.";
                    alias install="bundler install";
                    alias build="bundle exec jekyll build --destination docs/"
                    alias watch="bundle exec jekyll serve"
                '';
            
            in {
                devShell = obsoleteEnv;
            }
             
        );
}

