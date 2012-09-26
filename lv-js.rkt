#lang racket

(define (lv->js e)
  (match e
    [(list 'λ (list x0) e0)
     (format "(function(~a){return ~a;})" x0 (lv->js e0))]
    [(list '* e0 e1)
     (format "(~a*~a)" (lv->js e0) (lv->js e1))]
    [(list 'print e0 e1)
     (format "(function(){console.log(~a);return ~a;})()" (lv->js e0) (lv->js e1))]
    [(list 'print-list e0 e1)
     (format "(function(){console.log(listChurchDecode(~a));return ~a;})()" (lv->js e0) (lv->js e1))]
    [(list 'pred e0)
     (format "(~a-1)" (lv->js e0))]
    [(list 'zero? e0 e1 e2)
     (format "((~a===0)?~a:~a)" (lv->js e0) (lv->js e1) (lv->js e2))]
    [(list e0 e1)
     (format "(~a(~a))" (lv->js e0) (lv->js e1))]
    [x0
     (format "~a" x0)]))

(provide lv->js)