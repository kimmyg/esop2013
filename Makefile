all: paper technical-report

paper:
	pdf-slatex paper.tex
	bibtex paper
	pdf-slatex paper.tex
	pdf-slatex paper.tex
	
technical-report:
	pdf-slatex technical-report.tex

