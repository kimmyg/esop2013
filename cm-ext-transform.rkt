#lang racket

(define TRUE '(λ (x) (λ (y) x)))
(define FALSE '(λ (x) (λ (y) y)))
(define NIL FALSE)

(define (transform e)
    (let ([f (gensym 'f)]
          [m (gensym 'm)]
          [a (gensym 'a)]
          [b (gensym 'b)])
      (match e
        [(list 'ccm)
         `(λ (,f) (λ (,m) ((,m (λ (z) z)) (λ (z) z))))]
        [(list 'wcm e0 e1)
         `(λ (,f)
            (λ (,m)
              ((,(transform e1)
                ,TRUE)
               (((λ (,a) (λ (,b) ,(transform `(λ (z) ((z ,a) ,b)))))
                 ((,(transform e0) ,FALSE) ,m))
                ((,f
                  (((((,m (λ (z) z)) (λ (z) z)) (λ (x) (λ (,f) (λ (,m) (λ (y) (λ (,f) (λ (,m) y))))))) (λ (z) z)) (λ (z) z)))
                 ((,m (λ (z) z)) (λ (z) z)))))))]
        [(list 'λ (list x0) e0)
         `(λ (,f) (λ (,m) (λ (,x0) ,(transform e0))))]
        [(list 'print e0 e1)
         `(λ (,f) (λ (,m) (print ((,(transform e0) ,FALSE) ,m) ((,(transform e1) ,f) ,m))))]
        [(list 'pred e0)
         `(λ (,f) (λ (,m) (pred ((,(transform e0) ,FALSE) ,m))))]
        [(list 'zero? e0)
         `(λ (,f) (λ (,m) (zero? ((,(transform e0) ,FALSE) ,m))))]
        [(list '* e0 e1)
         `(λ (,f) (λ (,m) (* ((,(transform e0) ,FALSE) ,m) ((,(transform e1) ,FALSE) ,m))))]
        [(list e0 e1)
         `(λ (,f)
            (λ (,m)
              (((((,(transform e0) ,FALSE) ,m)
                 ((,(transform e1) ,FALSE) ,m))
                ,f)
               ,m)))]
        ['error
         'error]
        [x0
         `(λ (,f) (λ (,m) ,x0))])))

(define (init e)
    (let ([f (gensym 'f)]
          [m (gensym 'm)])
      `((,e ,FALSE) ,(transform NIL))))

(provide transform
         init)